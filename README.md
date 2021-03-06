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
    - 与 React 组件不同的是，自定义 Hook 不需要具有特殊的标识。我们可以自由的决定它的参数是什么，以及它应该返回什么（如果需要的话）。换句话说，它就像一个正常的函数。但是它的名字应该始终以 use 开头，这样可以一眼看出其符合 Hook 的规则。
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
- 在函数组件中执行副作用操作，例如状态变化了会引起此副作用
- 作用类似类组件中的`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`等
- React会在每次渲染后调用此函数
- 可以返回一个函数，在组件销毁时被调用
* 无需清除的effect
    - 在每次渲染之后执行
    - 在函数组件内定义，可以直接访问函数的state变量
* 需要清除的effect
    - 对应`componentDidMount`和`componentWillUnmount`
    - effect返回函数会在组件卸载时被执行

# JS语法
# Template literals
- [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Example:
```
`string text ${expression} string text`
```