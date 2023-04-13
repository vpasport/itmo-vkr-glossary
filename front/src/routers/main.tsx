import type { FC } from 'react'

import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

import { GRAPH_ROUTE, MAIN_ROUTE } from '@/constants'
import { Header } from '@/components'
import { Dictionary, Graph } from '@/pages'

export const MainRouter: FC = () => {
  return (
    <Router history={createBrowserHistory({ forceRefresh: true })}>
      <Header />
      <Switch>
        <Route path={GRAPH_ROUTE} component={Graph} />
        <Route path={MAIN_ROUTE} component={Dictionary} />
        <Route path="*" component={Dictionary} />
      </Switch>
    </Router>
  )
}
