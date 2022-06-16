browser.browserAction.onClicked.addListener(() => {
    browser.tabs.saveAsPDF({
      headerRight: '',
      headerLeft: '',
      footerRight: '',      
      edgeLeft: 0.1,
      edgeBottom: 0.1

    })
      
      .then((status) => {
        console.log(status);
    });
});



