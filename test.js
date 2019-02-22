// 注意，不一样的模块
var Redis = require('ioredis');
 
// 不一样的创建方式，多台获取，出来就是集群
var cluster = new Redis.Cluster(
    [{
      port: 6382,
      host: '192.168.43.74'
    }, {
      port: 6383,
      host: '192.168.43.74'
    }, {
      port: 6384,
      host: '192.168.87.5'
    },  {
      port: 6384,
      host: '172.20.4.78'
    }, {
      port: 6383,
      host: '172.20.4.78'
    },{
      port: 6383,
      host: '192.168.87.5'
    }]
);
// 设置数据相同
cluster.set('testk1', 'test');
// 获取数据相同
cluster.get('testk1', function (err, res) {
  
  console.log(res);
  
});
