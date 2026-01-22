from PIL import Image, ImageDraw
import os

def convert_to_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Use floodfill starting from corners to remove background
        # This preserves light-colored details inside the diagram
        
        width, height = img.size
        seeds = [
            (0, 0), 
            (width-1, 0), 
            (0, height-1), 
            (width-1, height-1)
        ]
        
        for seed in seeds:
            try:
                # Check if pixel is already transparent
                if img.getpixel(seed)[3] == 0:
                    continue
                    
                # Floodfill with 0 alpha (transparent)
                # thresh=50 handles JPEG compression noise quite well
                ImageDraw.floodfill(img, seed, (255, 255, 255, 0), thresh=50)
            except Exception as e:
                print(f"Floodfill warning at {seed}: {e}")

        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

assets_dir = "public/assets"
files = ["c1.jpeg", "c2.jpeg", "c3.jpeg", "c4.jpeg"]

for f in files:
    input_p = os.path.join(assets_dir, f)
    output_p = os.path.join(assets_dir, f.replace(".jpeg", ".png"))
    if os.path.exists(input_p):
        convert_to_transparent(input_p, output_p)
    else:
        print(f"File not found: {input_p}")
