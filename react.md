# HOC、Render props、Hooks

- render props
  解决横切关注点（Cross Cutting Concern）：注意与pure component一起要小心使用；

  缺点：无法在 return 语句外访问数据，地狱嵌套

- HOC

  优点：不会影响内层组件的状态, 降低了耦合度

  缺点：props值可能被覆盖，数据来源追溯

- hook
  不会嵌套、可重命名、数据来源、return之外的也能用；



