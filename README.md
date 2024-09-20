# back-lab-1

## Hot to launch
1. Clone repository
```bash
  git clone https://github.com/thebladehit/back-lab-1.git
```

### Via node
1. Install Node JS from [here](https://nodejs.org/uk)
2. Run:
```bash
node index.js
```

### Via docker
1. Install docker from [here](https://www.docker.com/)
2. Build a container
```docker
docker build . -t <you-name>
```
3. Run a container
```docker
docker run -it -p <your-port>:3000 <your-name>
```

### Via docker-compose
1. Install docker and docker-compose from [here](https://www.docker.com/)
2. Build a container
```docker
docker-compose build
```
3. Run a container
```docker
docker-compose up
```