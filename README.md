# Nutrien Kata

## How To Run Locally
```
npm install
npm start
```

## Run Tests
```
npm test
```

## AWS Deployment
This is deployed to a EC2 instance in AWS and can be accessed from anywhere via: http://3.149.239.150:8000/health, http://3.149.239.150:8000/Commodity/histogram, or the other histogram endpoints.

The steps for deployment:
- Create EC2 container
- Allow traffic from port 8000 (this would not be used on a production application)
- Deploying the code to the container using the new `npm run deploy` script
- Go onto the container and running `npm install` and `npm start`
- Access via the container's Public IPv4 address
