import os from 'os';
import cluster from "cluster";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const startServer = async (app) =>{
  dotenv.config();
  // const cpuCount = os.cpus().length;
  const cpuCount = 1;
  if(cluster.isPrimary){
    for(let i=0;i<cpuCount;i++){
      cluster.fork();
    }
    cluster.on('exit',(worker,code,signal) =>{
      console.log(`Failed ${worker.process.pid} with Code ${code} and Singal ${signal}`);
      cluster.fork();
    })
  }else{
    const Port = process.env.PORT || 3000;
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log(`DataBases Connected SuccessFully ${mongoose.connection.name}`);
      app.listen(Port,() =>{
        console.log(`App Is Listen on Port:${Port} With Worker Id:${process.pid}`);
      })
    } catch (error) {
      console.log('Error While Connecting DataBases',error); 
    }
  }
}

export default startServer;