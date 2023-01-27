import type { FC } from 'react'

import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

import { Header } from '@/components'
import { Dictionary, Graph } from '@/pages'

export const MainRouter: FC = () => {
  return (
    <Router history={createBrowserHistory({ forceRefresh: true })}>
      <Header />
      <Switch>
        <Route path="/graph" component={Graph} />
        <Route path="*" component={Dictionary} />
      </Switch>
    </Router>
  )
}
