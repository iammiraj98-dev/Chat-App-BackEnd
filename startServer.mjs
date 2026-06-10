import os from 'os';
import cluster from "cluster";
const startServer = async (app) =>{
  if(cluster.isPrimary){
    for(let i=0;i<os.cpus().length;i++){
      cluster.fork();
    }
    cluster.on('exit',(worker,code,signal) =>{
      cluster.fork();
    })
  }else{
    const Port = 3000;
    app.listen(Port,() =>{
      console.log(`App Is Listen on Port:${Port} With Worker Id:${process.pid}`);
    })

  }
}

export default startServer;