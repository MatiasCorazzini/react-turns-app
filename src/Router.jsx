import { useState, useEffect, Children } from "react";
import { EVENT } from "./const";
import { match } from "path-to-regexp";

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h3>Error 404</h3>,
}) {


  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENT.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENT.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENT.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENT.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // add routes from the children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);

    if (!matched) return false;

    routeParams = matched.params
    return true;
  })?.Component

  return Page 
  ? <Page routeParams={routeParams}/> 
  : <DefaultComponent />;
}