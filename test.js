// ע�⣬��һ����ģ��
var Redis = require('ioredis');
 
// ��һ���Ĵ�����ʽ����̨��ȡ���������Ǽ�Ⱥ
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
// ����������ͬ
cluster.set('testk1', 'test');
// ��ȡ������ͬ
cluster.get('testk1', function (err, res) {
  
  console.log(res);
  
});
