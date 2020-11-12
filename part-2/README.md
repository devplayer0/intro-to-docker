# Part 2

1. Build the image: `docker build i2d/part-2 .`
2. Run the image: `docker run --rm -i i2d/part-2`
3. Try to connect to the server: `curl localhost:3000`
4. Re-run the image with a port forward: `docker run --rm -i -p 3000:3000 i2d/part-2`
