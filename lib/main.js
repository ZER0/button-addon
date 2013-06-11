const { Button } = require('sdk/ui');
const  { data } = require('sdk/self');

let mybutton = Button({
  id: 'my-button',
  size: 'small',
  image: data.url('addon.png'),
  label: 'Reset the Tab state',
  onClick: function(state) {
    // `state` is equals to:
    // let state = this.state(tabs.activeTab);

    // removes the state for the Tab
    if (state.image === data.url('coffee.png'))
      this.state(tabs.activeTab, null);
    // removes the state for the Window
    else if (state.image === data.url('beer.png'))
      this.state(browserWindows.activeWindow, null);
  }
})

let { browserWindows } = require("sdk/windows")
let tabs = require("sdk/tabs");

require("sdk/widget").Widget({
  id: "my-widget2",
  label: "Set a Window State for the button",
  content: "Win",
  width: 32,
  onClick: function(){
    let { activeWindow } = browserWindows;

    mybutton.state(activeWindow, {
      image: data.url('beer.png')
    });

    console.log(uneval(mybutton.stateFor(activeWindow)))
  }
})

require("sdk/widget").Widget({
  id: "my-widget3",
  label: "Set a Tab State for the button",
  content: "Tab",
  width: 32,
  onClick: function(){
    mybutton.state(tabs.activeTab, {
      image: data.url('coffee.png')
    });
  }
})
