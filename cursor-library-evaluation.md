# finding the best javascript cursor library


subjectively best in the sense that i enjoy using it,
it's not unnecessarily complex,
it's a good fit for the problem domain,
it elegantly helps me solve all the problems i encounter
when writing client side apps,
it doesn't introduce new problems,
it doesn't restrict me,
it doesn't stop me from doing things i want to do.

your mileage may vary.

benchmark is https://github.com/omcljs/om
which i really enjoy using.

## https://github.com/caseywebdev/cursors (80 :star:, 100/month)

> Maintain your React state with Cursors.

tiny with just ~120 LOC.

tried it.

tightly coupled with react.
tree root is always coupled to a component.
difficult to have tree root and cursors as hinoki dependencies.

can't do much with cursors outside of components.
cursors are just data. that is fine but the helper functions for working with
that data are not exported by the package.

liked the way the mixin works:
cursors are sent in as `cursors` props.
on `componentWillReceiveProps` `this.state` is initialized from `this.props.cursors`.

didn't find an elegant way to initialize cursor state on component mount.
[see log.md.](log.md)

too limited.

## https://github.com/omniscientjs/omniscient (840 :star:, 1,1k/month)

> A library providing an abstraction for React components that allows for fast top-down rendering embracing immutable data for js
> Omniscient pairs the simplicity of Quiescent with the cursors of Om, for js, using Immutable.js.
that sounds really great

cursors

needs further evaluation

## https://github.com/Yomguithereal/baobab (1400 :star:, 5k/month)

http://www.christianalfoni.com/articles/2015_02_06_Plant-a-Baobab-tree-in-your-flux-application

http://www.christianalfoni.com/articles/2015_04_26_Handling-complex-state-with-Baobab

https://github.com/Yomguithereal/baobab-react (130 :star:, 1,4k/month)
React integration for Baobab.
It aims at implementing a handful of popular React patterns so that you're free to choose the one you want rather than being imposed one by the library.

https://github.com/jacomyal/baobab-router

cursors all the way down

needs further evaluation

## https://github.com/moreartyjs/moreartyjs (600 :star:, 2k/month)

> Morearty.js - centralized state management for React in pure JavaScript

no cursors

needs further evaluation

## https://github.com/rackt/redux (5875 :star:, 45k/month)

> Redux is a predictable state container for JavaScript apps.

no cursors

needs further evaluation

## https://github.com/dustingetz/react-cursor/ (893 :star:, 138/month)

cursors

needs further evaluation

## https://github.com/stample/atom-react (100 :star:, 723/month)

http://stackoverflow.com/questions/25791034/om-but-in-javascript/

needs further evaluation

## last option: writing my own

feasable as cursors has just ~120 LOC and almost did what i wanted.

advantages: absolute control. most intuitive as it would work the way my mind works. less work in the long run. would work exactly the way i want it. most fun.

disadvantages: more work initially.

### wishlist

todo
