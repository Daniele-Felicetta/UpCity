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


/* 
/// Builds a file tree structure starting from the given path.
///
/// This function recursively traverses the directory structure starting from the provided path,
/// creating a tree-like representation of the file system. It includes both files and directories
/// in the tree.
///
/// # Arguments
///
/// * `path` - A `&Path` representing the root directory from which to start building the tree.
///
/// # Returns
///
/// Returns a `Result` containing a `FileNode` representing the root of the tree if successful,
/// or a `BuildTreeError` if an error occurs during the process.
///
/// # Errors
///
/// This function will return an error if:
/// * The provided path is invalid or inaccessible.
/// * There are permission issues when reading directory contents.
/// * Any I/O error occurs during the file system traversal.
///
/// # Example
///
/// ```
/// use std::path::Path;
///
/// let path = Path::new("/path/to/directory");
/// match build_tree(path) {
///     Ok(tree) => println!("Tree built successfully: {:?}", tree),
///     Err(e) => eprintln!("Error building tree: {}", e),
/// }
/// ```
fn build_tree(path: &Path) -> Result<FileNode, BuildTreeError> {
    // Implementation details...
}

/// Serializes a FileNode tree structure into a JSON string.
///
/// This function takes a `FileNode` representing the root of a file tree and converts it
/// into a JSON string representation. This is useful for storing the tree structure or
/// transmitting it over network protocols.
///
/// # Arguments
///
/// * `tree` - A reference to the `FileNode` representing the root of the tree to be serialized.
///
/// # Returns
///
/// Returns a `String` containing the JSON representation of the tree.
///
/// # Example
///
/// ```
/// let tree = FileNode::new("root", true);
/// let json = serialize_tree_to_json(&tree);
/// println!("JSON representation: {}", json);
/// ```
fn serialize_tree_to_json(tree: &FileNode) -> String {
    // Implementation details...
}

/// Writes a JSON string to a file.
///
/// This function takes a JSON string and writes it to a file at the specified path.
/// If the file already exists, it will be overwritten.
///
/// # Arguments
///
/// * `json` - A string slice containing the JSON data to be written.
/// * `output_path` - A string slice specifying the path where the file should be written.
///
/// # Returns
///
/// Returns a `Result` indicating success or failure of the write operation.
///
/// # Errors
///
/// This function will return an error if:
/// * The file cannot be created or opened for writing.
/// * There are permission issues when writing to the file.
/// * Any I/O error occurs during the write operation.
///
/// # Example
///
/// ```
/// let json = r#"{"key": "value"}"#;
/// match write_json_to_file(json, "output.json") {
///     Ok(_) => println!("JSON written successfully"),
///     Err(e) => eprintln!("Error writing JSON: {}", e),
/// }
/// ```
fn write_json_to_file(json: &str, output_path: &str) -> Result<(), std::io::Error> {
    // Implementation details...
}
 */