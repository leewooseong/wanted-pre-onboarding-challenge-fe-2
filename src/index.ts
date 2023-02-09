interface TagData {
    tagId: number;
    tagName: string;
}

// Class representing a TodoItem.
class TodoItem {
    userId: string; // - The id of User.
    content: string; // - The description of todoItem.
    category: string; // - The category of todoItem.
    tags?: TagData[]; // - The tagInfo List of todoItem, this is optional parameter

    // CREATE Methods ...
    constructor(
        userId: string,
        content: string,
        category: string,
        tags: TagData[]
    ) {
        //...
    }

    // UPDATE Methods...
    updateContent(content: string) {
        // ...
    }
    updateCategory(category: string) {
        // ...
    }
    updateTag(tagId: number, tagName: string) {
        // ...
    }

    // DELETE Methods...
    deleteTag(tagId: number) {
        //...
    }
    deleteTagAll() {
        //...
    }

    // READ Methods...
    render(parentNode: HTMLElement) {
        //...
    }
}

interface TodoItemData {
    id: number;
    todoItem: TodoItem;
}

class TodoList {
    todoListData: TodoItemData[];

    constructor() {
        //...
    }

    // CREATE Methods...
    addTodoItem(
        userId: string,
        content: string,
        category: string,
        tags?: TagData[]
    ) {
        //...
    }

    // DELETE Methods...
    deleteTodoItem(userId: string, todoId: number) {
        // ...
    }
    deleteTodoList(userId: string) {
        //...
    }

    // READ Methods...
    filterTodoListByUser(userId: string): TodoItemData[] {
        // ...
        return [];
    }
    render() {
        // ...
    }
}
