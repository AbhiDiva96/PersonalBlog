#use node 18
FROM node:18

#seting a working directory
WORKDIR /app

#copying package.json file
COPY package.json .

#installing dependencies
RUN npm install 

#copying all files to working directory
COPY . .

#exposing port 3000 
EXPOSE 3000

#running the app
CMD ["npm", "run", "start"]

#build the app
# docker build -t personalblog:latest .

#run the app    
# docker run -p 3000:3000 personalblog:latest       

# docker run -p 3000:3000 -e JWT_SECRET=secret personalblog:latest
