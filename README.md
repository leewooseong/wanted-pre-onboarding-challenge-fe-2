# JSDoc을 이용하여 Todo 앱 문서화하기

## 1. 요구사항

사전 과제는 [사전과제 링크](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)에서 요구사항을 확인할 수 있습니다.

## 2. 구현

### :: TodoItem 구현 사항

#### **1. TodoItem 기능**

-   Todo 앱에서 개별적인 Todo를 표현하는 클래스를 담당합니다.
-   TodoItem에서는 다음의 함수들을 통해 CRUD를 구현합니다.
    -   `CREATE` : `Constructor` 함수를 통해 TodoItem을 생성합니다.
    -   `READ` : `render` 함수를 통해 TodoItem UI를 그려줍니다.
    -   `UPDATE` : `update 함수들`을 통해 Item과 관련된 내용을 업데이트합니다.
    -   `DELETE` : `delete 함수들`를 통해 Item에서 관리하는 tag들을 삭제합니다.

#### **2. TodoItem data**

-   TodoItem은 다음과 같은 데이터 구조를 가집니다.

    ```javascript
    TodoItem {
        userId:string(required),
        content:string(required),
        category:string(required),
        tags:TagData[](optional),
    }
    ```

#### **3. tag data**

-   TodoItem 내에서 사용되는 tag 배열을 다음과 같은 데이터 구조를 가집니다.

    ```javascript
    TagData {
        tagId:number(required),
        tagName:string(required),
    }
    ```

### :: TodoList 구현 사항

#### **1. TodoList 기능**

-   Todo 앱에서 전체 Todo 전체를 표현하는 클래스를 담당합니다.
-   TodoList에서는 다음의 함수들을 통해 CRD를 구현합니다.
-   `CREATE` : `Constructor` 함수를 통해 TodoList을 생성합니다.
-   `READ` : `render` 함수를 통해 TodoListData를 이용하여 TodoItem들을 그려줍니다.
-   `DELETE` : `delete 함수들`를 통해 Item에서 관리하는 tag들을 삭제합니다.

    ※ `UPDATE`에 관한 내용은 TodoItem에서 관리하기 때문에 todoList에서는 update관련 함수가 존재하지 않습니다.

#### **2. TodoListData 구조**

-   TodoList에서는 TodoListData를 관리하며 해당 데이터에 존재하는 todo 목록에 해당하는 todoItem을 생성합니다. 데이터의 구조는 다음과 같습니다.

    ```javascript
    TodoListData : TodoItemData[](required),
    ```
