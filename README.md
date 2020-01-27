# Hooks
* 什么是Hook
    - Hook函数只能定义在函数中，不能定义在类中
    - Hook函数用以在函数组件中加入状态和生命周期等特性
    - react不仅内置了`useState`这样的Hook函数，也可以自定义Hook函数
* Hook函数的限制
    - 不能在循环，条件判断或子函数中调用
    - 只能在函数组件中调用
* 自定义Hook
    - 解决组件之间重用一些状态的逻辑
    - 将一样的状态逻辑抽到一个函数组件中，此函数组件被用作复用状态逻辑，但是不复用状态本身
    - 如果函数以`use`开头并调用其他Hook，我们就称其是自定义Hook
## State Hook
- [useState-example](./src/Example.js)
    - `useState`返回一对值： 当前状态值 + 更新状态函数
    - `useState`接收一个传入参数，即初始状态值
    - 在函数组件中钩入React的state特性
- 声明State变量
    `const [XXX,setXXX] = useState(XX);`
- 读取State变量
    `{state}`
- 更新State变量
    利用setXXX和XXX变量直接操作，如`setXXX(...)`
## Effect Hook
    - 副作用函数
    - 作用类似类组件中的`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`等
    - React会在每次渲染后调用此函数
    - 可以返回一个函数，在组件销毁时被调用

# JS语法
# Template literals
    - [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    - Example:
    ```
    `string text ${expression} string text`
    ```