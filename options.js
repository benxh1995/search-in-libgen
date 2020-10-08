function saveOptions(e) {
    browser.storage.sync.set({
      web: document.querySelector("#web").value
    });
    alert(document.querySelector("#web").value);
    e.preventDefault();
  }
  
  function restoreOptions() {
    var storageItem = browser.storage.managed.get('web');
    
    alert(storageItem);
    storageItem.then((res) => {
      document.querySelector("#managed-web").innerText = res.web;
    });
  
    var gettingItem = browser.storage.sync.get('web');
    gettingItem.then((res) => {
      document.querySelector("#web").value = res.web;
    });
  }
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);