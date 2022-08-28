class App{
  newActivity(){
    event.preventDefault();
    const descriptionActivity = document.querySelector("input#add-activity").value;
    const activity = new AddActivity(descriptionActivity);
    this.createElementText(activity)
  }

  createElementText(activity){
    const newElementText = document.createElement('li')
    const insertText = document.createElement('p')
    insertText.setAttribute('class','text-description')
    insertText.innerText = activity.description
    newElementText.appendChild(this.checkBoxElement())
    newElementText.appendChild(insertText)
    this.buttonsToEditToList(newElementText)
    this.addActivityToList(newElementText)
    this.clearInput()
  }

  checkBoxElement(){
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    checkBox.setAttribute('class','style-checkbox')
    checkBox.setAttribute('onclick','app.activityDone(this)')
    return checkBox
  }

  removeElementText(){
    const removeButton = document.createElement('button')
    const removeButtonImage = document.createElement('img')
    removeButton.setAttribute('onclick','app.removeElementToList(this)')
    removeButton.setAttribute('class','button-list')
    removeButtonImage.setAttribute('src','img/remove.png')
    removeButtonImage.setAttribute('class','img-box-buttons')
    removeButton.appendChild(removeButtonImage)
    return removeButton
  }

  renameElementText(){
    const renameButton = document.createElement('button')
    const renameButtonImage = document.createElement('img')
    renameButton.setAttribute('onclick', 'app.renameElementToList(this)')
    renameButton.setAttribute('class','button-list')
    renameButtonImage.setAttribute('src','img/edit.png')
    renameButtonImage.setAttribute('class','img-box-buttons')
    renameButton.appendChild(renameButtonImage)
    return renameButton
  }

  buttonsToEditToList(elementList){
    const editButtons = document.createElement('div')
    editButtons.setAttribute("class","box-buttons")
    editButtons.appendChild(this.removeElementText())
    editButtons.appendChild(this.renameElementText())
    elementList.appendChild(editButtons)
  }

  addActivityToList(elementList){
    const listActivity = document.querySelector('ul.activities-list')
    listActivity.appendChild(elementList)
  }

  removeElementToList(elementList){
    const listActivity = document.querySelector('ul.activities-list')
    listActivity.removeChild(elementList.parentNode.parentNode)
  }

  renameElementToList(elementList){
    const elementTextList = elementList.parentNode.parentNode.querySelector('p.text-description')
    const newNameActivity = prompt('Digite o nome da atividade:',elementTextList.innerText)
    if(newNameActivity != null){
      elementTextList.innerText = newNameActivity
    }
  }

  activityDone(elementList){
    const checkButton = elementList.checked
    const listActivity = document.querySelector('ul.activities-list')
    const listElement = elementList.parentNode
    listActivity.removeChild(listElement)

    if(checkButton == true){
      listActivity.appendChild(listElement)
      listElement.querySelector('p').setAttribute('class','text-description text-done')
    } else{
      listActivity.prepend(listElement)
      listElement.querySelector('p').setAttribute('class', 'text-description')
    }
  }

  clearInput(){
    document.querySelector("input#add-activity").value = ''
  }
}