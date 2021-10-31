// created a variable named 'tabs' and 'document.querrySelectorAll' to select all the id's from the html file //
const tabs = document.querySelectorAll ('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]') // const that has all the information of my tabs//

// added the command 'tabs.forEach' becuase I want the tabs to loop, I added the action to click in the 'add.Event.Listener' to only show that paricular tab when clicked"
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
})
