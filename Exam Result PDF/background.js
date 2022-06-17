browser.browserAction.onClicked.addListener(() => {
    browser.tabs.saveAsPDF({
      headerRight: '',
      headerLeft: '',
      footerRight: '',      
      edgeLeft: 0.1,
      edgeBottom: 0.1,
      toFileName: "Exam_Result"
    })
      
      .then((status) => {
        console.log(status);
    });
});



