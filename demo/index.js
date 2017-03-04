import Cahce from '../src/index';
const {
  LocalCache,
  SessionCache,
  MemoryCache,
} = Cahce;

class DemoCache extends LocalCache {
  constructor() {
    const options = {
      lifeTime: '2D', // 超时时间两天
      defaultData: {
        name: '',
      },
      key: 'demo_key',
    };
    super(options);
  }
}

window.onload = function() {
  const demoCache = DemoCache.getInstance();
  const cacheInput = document.getElementById('cacheInput');
  const setCacheButton = document.getElementById('setCacheButton');
  const getCacheButton = document.getElementById('getCacheButton');
  const changeCacheButton = document.getElementById('changeCacheButton');
  const cacheResult = document.getElementById('cacheResult');

  setCacheButton.onclick = function() {
    const data = {
      'name': cacheInput.value,
    };
    demoCache.set(data);
  };

  getCacheButton.onclick = function() {
    console.log(demoCache.get());
    const value = demoCache.getAttr('name');
    cacheResult.innerText = value;
  };

  changeCacheButton.onclick = function() {
    demoCache.setAttr('name', cacheInput.value);
  };
};
