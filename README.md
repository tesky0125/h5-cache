# html5-cache:

标签： html5

---

**针对html5单应用开发中经常使用的数据存储与缓存进行封装，包括：**
 
 1. 针对内存对象(memory object)，localStorage，sessionStorage，cookie等提供一致的api，如set,get，setAttr,getAttr等接口；
 2. 针对各种存储对象加入超时时间，支持缓存过期定期清除；
 3. 支持存储异常处理，针对memory/localStorage/sessioStorage/cookie等具有大小的存储介质，当超出存储时会按条件清除缓存，如FIFO/LRU等；
 4. 支持缓存降级处理，当使用localStorage/sessionStorage存储数据时，如果当前浏览器不支持或处于隐私模式，则自动降级采用memory存储，且支持刷新(使用window.name特性)

**后期考虑**

 1. 对数据操作添加事件监听
 2. react方面：与react-router.state结合

**该工具库在工作时使用，觉得复用性较高，便剥离出来与大家分享**
 **注意：**该库也被上传到公司gitlab，避免触碰公司政策红线，该库源码采用加密处理，可在npm install完成后，运行npm run decode查看源码并运行demo。



