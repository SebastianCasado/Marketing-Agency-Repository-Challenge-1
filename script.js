// created a variable named 'tabs' and 'document.querrySelectorAll' to select all the id's from the html file //
const tabs = document.querySelectorAll ('[data-tab-target]')

// added the command 'tabs.forEach' becuase I want the tabs to loop, I added the action to click in the 'add.Event.Listener' to only show that paricular tab when clicked"
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target =document.querySelector(tab.dataset.tabTarget)
      target.classiList.add('active')
    })
})