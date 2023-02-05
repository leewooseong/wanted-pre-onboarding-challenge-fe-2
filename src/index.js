/**
 * tag Data
 * @typedef {Object} TagData
 * @property {number} tagId - id of tag
 * @property {string} tagName - name of tag
 */
/**
 * Class representing a TodoItem.
 * @property {string} userId - The id of User.
 * @property {string} content - The description of todoItem.
 * @property {string} category - The category of todoItem.
 * @property {TagData[]} [tags=[]] - The tagInfo List of todoItem, this is optional parameter
 */
class TodoItem {
    // CREATE Methods ...
    /**
     * Create a TodoItem DomElement
     * @param {string} userId - The id of User.
     * @param {string} content - The description of todoItem.
     * @param {string} category - The category of todoItem.
     * @param {TagData[]} [tags=[]] - The tagInfo List of todoItem, this is optional parameter
     */
    constructor(userId, content, category, tags) {
        //...
    }

    // UPDATE Methods...
    /**
     * update content
     * @param {string} content - parmaDescription
     */
    updateContent(content) {
        // ...
    }
    /**
     * update category
     * @param {string} category - parmaDescription
     */
    updateCategory(category) {
        // ...
    }
    /**
     * update tagInfo
     * @param {number} tagId - parmaDescription
     * @param {string} tagName - parmaDescription
     */
    updateTag(tagId, tagName) {
        // ...
    }

    // DELETE Methods...
    /**
     * delete todoItem's tag
     * @param {Symbol} tagId - delete tag which has this tagId
     */
    deleteTag(tagId) {
        //...
    }
    /**
     * delete todoItem's tags all
     */
    deleteTagAll() {
        //...
    }

    // READ Methods...
    /**
     * render todoItem UI
     * @param {HTMLElement} parentNode - todoItem UI(HTMLElement) will be append to parentNode
     */
    render(parentNode) {
        //...
    }
}

/**
 * todoList Data
 * @typedef {Object} TodoItemData
 * @property {number} id - id of todoItem
 * @property {TodoItem} todoItem - instance of todoItem class
 */
/**
 * Class representing a TodoList.
 * @property {TodoItemData[]} todoListData - data list
 */
class TodoList {
    constructor() {}

    // CREATE Methods...
    /**
     * create TodoItem Element using TodoItem class and add to todoListData with random todoItemId
     * @param {string} userId - The id of todoItem.
     * @param {string} content - The description of todoItem.
     * @param {string} category - The category of todoItem.
     * @param {TagData[]} [tags=[]] - The tagInfo List of todoItem, this is optional parameter
     */
    addTodoItem(userId, content, category, tags) {
        //...
    }

    // DELETE Methods...
    /**
     * delete specific user's TodoItem by itemId
     * @param {string} userId - delete todoItem which has this userId
     * @param {number} todoId - delete todoItem which has this todoId
     */
    deleteTodoItem(userId, todoId) {
        // ...
    }
    /**
     * delete specific user's TodoList
     * @param {string} userId - delete todoList which has this userId
     */
    deleteTodoList(userId) {
        //...
    }

    // READ Methods...
    /**
     * filter TodoItemList by userId
     * this function will be used when the page is rendered with filtered data
     * @param {string} userId - userId will be used for Filtering TodoItemList
     * @return {TodoItemData[]} - return filtered todoList
     */
    filterTodoListByUser(userId) {
        // ...
    }
    /**
     * rendering Page with TodoItemList
     * TodoItemList will be filtered by userId When user want to render user's todoList
     */
    render() {
        // ...
    }
}
