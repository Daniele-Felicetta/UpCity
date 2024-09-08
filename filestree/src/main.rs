use std::env;
use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::{Path, PathBuf};
use serde::{Serialize, Deserialize};
use serde_json;
use std::error::Error;

#[derive(Serialize, Deserialize, Debug)]
struct TreeNode {
    name: String,
    is_dir: bool,
    children: Option<Vec<TreeNode>>, // None if it's a file, Some(Vec) if it's a directory
}

impl TreeNode {
    fn new_file(name: String) -> Self {
        TreeNode {
            name,
            is_dir: false,
            children: None,
        }
    }

    fn new_dir(name: String) -> Self {
        TreeNode {
            name,
            is_dir: true,
            children: Some(Vec::new()),
        }
    }

    fn add_child(&mut self, child: TreeNode) {
        if let Some(children) = &mut self.children {
            children.push(child);
        }
    }
}

fn build_tree(path: &Path) -> Result<TreeNode, BuildTreeError> {
    let file_name = path.file_name()
        .map(|name| name.to_string_lossy().to_string())
        .ok_or(BuildTreeError::InvalidPath)?;

    if path.is_dir() {
        let mut dir_node = TreeNode::new_dir(file_name);

        match fs::read_dir(path) {
            Ok(entries) => {
                for entry in entries {
                    match entry {
                        Ok(entry) => {
                            let child_path = entry.path();
                            match build_tree(&child_path) {
                                Ok(child_node) => dir_node.add_child(child_node),
                                Err(e) => eprintln!("Error building tree: {}", e),
                            }
                        }
                        Err(e) => eprintln!("Error reading directory entry: {}", e),
                    }
                }
                Ok(dir_node)
            }
            Err(e) => Err(BuildTreeError::IoError(e)),
        }
    } else {
        Ok(TreeNode::new_file(file_name))
    }
}

fn serialize_tree_to_json(tree: &TreeNode) -> String {
    serde_json::to_string_pretty(tree).unwrap()
}

fn write_json_to_file(json: &str, output_path: &str) -> std::io::Result<()> {
    let mut file = File::create(output_path)?;
    file.write_all(json.as_bytes())?;
    Ok(())
}

#[derive(Debug)]
enum BuildTreeError {
    IoError(std::io::Error),
    InvalidPath,
}

impl std::fmt::Display for BuildTreeError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl std::error::Error for BuildTreeError {}

fn main() -> Result<(), Box<dyn Error>> {
    // Get the path from the command-line arguments or use current directory as default
    let args: Vec<String> = env::args().collect();
    let path = if args.len() > 1 {
        Path::new(&args[1]).to_path_buf()
    } else {
        env::current_dir()?.join("src") // Default to `src` relative to the current directory
    };

    println!("Navigating to directory: {:?}", path);

    // Build the file tree from the specified path
    let tree = match build_tree(&path) {
        Ok(tree) => tree,
        Err(e) => {
            eprintln!("Error building tree: {}", e);
            return Err(Box::new(e));
        }
    };

    // Serialize the tree to JSON
    let json_tree = serialize_tree_to_json(&tree);

    // Write the JSON tree to a file
    write_json_to_file(&json_tree, "tree.json")?;

    println!("File tree written to tree.json");

    Ok(())
}