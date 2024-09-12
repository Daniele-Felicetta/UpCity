use num_complex::Complex;
use image::{ImageBuffer, Rgb};

const MAX_ITERATIONS: u32 = 100;
const WIDTH: u32 = 800;
const HEIGHT: u32 = 600;

fn main() {
    let mut img = ImageBuffer::new(WIDTH, HEIGHT);

    for (x, y, pixel) in img.enumerate_pixels_mut() {
        let cx = 3.0 * (x as f64 - 0.5 * WIDTH as f64) / WIDTH as f64;
        let cy = 2.0 * (y as f64 - 0.5 * HEIGHT as f64) / HEIGHT as f64;

        let c = Complex::new(cx, cy);
        let mut z = Complex::new(0.0, 0.0);

        let mut i = 0;
        for t in 0..MAX_ITERATIONS {
            if z.norm() > 2.0 {
                break;
            }
            z = z * z + c;
            i = t;
        }

        let color = if i == MAX_ITERATIONS - 1 {
            Rgb([0, 0, 0])
        } else {
            let hue = 360.0 * i as f64 / MAX_ITERATIONS as f64;
            hsv_to_rgb(hue, 1.0, 1.0)
        };

        *pixel = color;
    }

    img.save("mandelbrot.png").unwrap();
    println!("Mandelbrot set has been generated and saved as 'mandelbrot.png'");
}

fn hsv_to_rgb(h: f64, s: f64, v: f64) -> Rgb<u8> {
    let c = v * s;
    let x = c * (1.0 - ((h / 60.0) % 2.0 - 1.0).abs());
    let m = v - c;

    let (r, g, b) = match h as u32 {
        0..=59 => (c, x, 0.0),
        60..=119 => (x, c, 0.0),
        120..=179 => (0.0, c, x),
        180..=239 => (0.0, x, c),
        240..=299 => (x, 0.0, c),
        _ => (c, 0.0, x),
    };

    Rgb([
        ((r + m) * 255.0) as u8,
        ((g + m) * 255.0) as u8,
        ((b + m) * 255.0) as u8,
    ])
}




/// # Implementing Mandelbrot Set Generator in Tauri with Next.js
///
/// This guide outlines how to integrate this Mandelbrot set generator into a Tauri application
/// with a Next.js frontend.
///
/// ## Steps:
///
/// 1. Set up a new Tauri project with Next.js:
///    ```
///    npm init tauri-app mandelbrot-tauri-next
///    cd mandelbrot-tauri-next
///    npm install next react react-dom
///    ```
///
/// 2. Move this Rust code into `src-tauri/src/main.rs`:
///    - Ensure all necessary dependencies are added to `src-tauri/Cargo.toml`
///    - Add `image = "0.24.5"` and `num-complex = "0.4.2"` to your dependencies
///
/// 3. Modify the `main()` function to expose it as a Tauri command:
///    ```rust
///    use tauri::Manager;
///    
///    #[tauri::command]
///    fn generate_mandelbrot() -> String {
///        // Your existing Mandelbrot generation code here
///        // Instead of saving to a file, return the image as a base64 string
///        let mut buffer = Vec::new();
///        img.write_to(&mut buffer, image::ImageOutputFormat::Png).unwrap();
///        base64::encode(buffer)
///    }
///    
///    fn main() {
///        tauri::Builder::default()
///            .setup(|app| {
///                #[cfg(debug_assertions)]
///                app.get_window("main").unwrap().open_devtools();
///                Ok(())
///            })
///            .invoke_handler(tauri::generate_handler![generate_mandelbrot])
///            .run(tauri::generate_context!())
///            .expect("error while running tauri application");
///    }
///    ```
///
/// 4. Create a Next.js page in `src/pages/index.js`:
///    ```jsx
///    import { useState } from 'react';
///    import { invoke } from '@tauri-apps/api/tauri';
///    
///    export default function Home() {
///      const [image, setImage] = useState(null);
///    
///      const generateMandelbrot = async () => {
///        const base64Image = await invoke('generate_mandelbrot');
///        setImage(`data:image/png;base64,${base64Image}`);
///      };
///    
///      return (
///        <div>
///          <h1>Mandelbrot Set Generator</h1>
///          <button onClick={generateMandelbrot}>Generate Mandelbrot</button>
///          {image && <img src={image} alt="Mandelbrot Set" />}
///        </div>
///      );
///    }
///    ```
///
/// 5. Update your `src-tauri/tauri.conf.json` to include necessary permissions:
///    ```json
///    {
///      "tauri": {
///        "allowlist": {
///          "all": true
///        }
///      }
///    }
///    ```
///
/// 6. Run your Tauri app:
///    ```
///    npm run tauri dev
///    ```
///
/// This setup allows you to generate the Mandelbrot set in Rust and display it in your
/// Next.js frontend within a Tauri application.



