
# Serverless Blogging Platform

# Overview

## Overview  

This project is a serverless blogging platform designed for scalability, cost efficiency, and ease of management using Amazon Web Services (AWS). Traditional blogging platforms often struggle with infrastructure overhead and scaling issues. By leveraging AWS Lambda, Amazon API Gateway, and Amazon DynamoDB, this project ensures automatic scaling, high availability, and minimal operational maintenance.  The platform dynamically adjusts to traffic demands, providing a seamless user experience while optimizing costs. Below is an overview of the analysis, along with sample outputs and results. This project was done in Dec' 2024.




<!-- 
## Publication

- This paper was presented in the “2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)”
- This paper is yet to be published by IEEE. -->


## Block Diagram

- The below block diagram gives an overview of the overall funtionality of the implemented project

 <p align="center">
  <img src="https://i.postimg.cc/Yqrx87hD/dd.jpg" alt="App Screenshot" width="400">
</p>


## Features

- **Serverless Architecture**: Built entirely using AWS Lambda, API Gateway, and DynamoDB, the platform eliminates the need for server management while ensuring high availability, scalability, and cost efficiency.

- **CRUD Operations with API Gateway & Lambda**: Users can create, read, update, and delete (CRUD) blog posts through a React.js front end, which interacts with AWS Lambda functions via API Gateway endpoints for seamless backend processing.

 <p align="center">
  <img src="https://i.postimg.cc/mkwJqSYv/Picture1.jpg" alt="App Screenshot" width="600">
     <img src="https://i.postimg.cc/fRkp2mJP/Picture2.jpg" alt="App Screenshot" width="300">

</p>



- **DynamoDB Storage for Scalable Data Management**: The platform leverages Amazon DynamoDB for efficient key-value storage, ensuring fast data retrieval, auto-scaling capabilities, and a schema-less structure to accommodate dynamic content changes.
    
 <p align="center">
  <img src="https://i.postimg.cc/xdnHjyMx/Picture3.png" alt="App Screenshot" width="360">
</p>

- **Secure and Reliable Access Management**: IAM roles, API Gateway security, and CORS integration protect the platform, enabling secure authentication, controlled access, and smooth cross-origin communication between the front end and backend services.

 <p align="center">
<img src="https://i.postimg.cc/dVvjHT4Y/Picture4.png" alt="App Screenshot" width="200" style="margin-right: 20px;">
     <img src="https://i.postimg.cc/VLPqvCyC/Picture5.png" alt="App Screenshot" width="500">

</p>

## Tech Stack Used in the Serverless Blogging Platform 

1. Frontend:
- React.js – For building an interactive and responsive UI.  

2. Backend & Middleware: 
- AWS Lambda – For executing serverless functions handling business logic.  
- AWS API Gateway – For managing HTTP requests and routing them to Lambda functions.  

3. Database: 
- Amazon DynamoDB – NoSQL database for storing blog posts efficiently.  

4. Security & Access Management:
- AWS IAM (Identity and Access Management) – For secure authentication and access control.  
- CORS (Cross-Origin Resource Sharing) – To allow secure cross-origin requests.  

5. Monitoring & Logging:  
- AWS CloudWatch – For real-time monitoring, logging, and debugging.  
## Installation  

**Prerequisites**  
Ensure you have the following installed/configured before proceeding: 
- Note that this project was implemented under AWS Free Tier and make sure to keep a track of the number of instances you are launching to not exceed the Free Tier limit
- Node.js & npm (for frontend setup)  
- AWS Lambda, IAM, API Gateway, and DynamoDB setup  



**Frontend Setup (React.js)**  
1. Install dependencies:
   ```bash
   npm install
   ```  
2. Configure API Gateway URL: 
- Replace the proxy in `package.json` with your AWS account link
- Replace the API paths with your AWS API Gateway endpoint in files (from `/src` directory) `BlogDetails.js`, `BlogList.js`, `Home.js`, `create.js`, `useBlogs.js` and `useFetch.js`.  

3. **Start the development server:**  
   ```bash
   npm start
   ```  
- The app should now be running on **http://localhost:3000**.  



**Backend Setup (AWS Lambda + API Gateway + DynamoDB)**  

1. Set Up AWS DynamoDB  
-  Open the AWS Console → Navigate to DynamoDB.  
- Create a new table:  
   - **Table Name:** `blog-database`  
   - **Primary Key:** `blogId` (String)  


2. Deploy AWS Lambda Functions
1. Navigate to AWS Lambda** in the AWS Console.  
2. Create a new function:  
   - Runtime: Node.js  
   - Execution Role: Create a new IAM role with access to DynamoDB.  

3. Upload or Write the Lambda Function Code:  
   - Use the AWS Console editor or deploy using the AWS CLI:  
     ```bash
     aws lambda create-function --function-name blogLambda \
       --runtime nodejs18.x --role arn:aws:iam::<your-account-id>:role/<your-lambda-role> \
       --handler index.handler --zip-file fileb://lambda.zip
     ```
   - Ensure the function correctly handles **GET, POST, PATCH, DELETE** requests.  



**Configure API Gateway**  
1. Open Amazon API Gateway → Create a new REST API.  
2. Create Resources & Methods:  
   - `/blog` → Methods: GET, POST  
   - `/blog/{id}` → Methods: GET, PATCH, DELETE  
3. Integrate with AWS Lambda:
   - Select "Lambda Function" as the integration type.  
   - Link it to the respective Lambda function.  
4. Enable CORS for API Gateway to allow frontend requests.  
5. Deploy the API and note the Invoke URL.  


**Final Steps**  
- Run the frontend and test CRUD operations via the UI.  
- Monitor logs via AWS CloudWatch.  


## Running Tests

The project can be implemented and tested to verify funtionality

