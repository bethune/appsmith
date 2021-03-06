import React from "react";
import { Switch, useRouteMatch, useLocation } from "react-router-dom";
import PageWrapper from "pages/common/PageWrapper";
import DefaultOrgPage from "./defaultOrgPage";
import AppRoute from "pages/common/AppRoute";
import Settings from "./settings";
export const Organization = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  return (
    <PageWrapper displayName="Organization Settings">
      <Switch location={location}>
        <AppRoute
          path={`${path}/:orgId/settings`}
          component={Settings}
          name={"Settings"}
        />
        <AppRoute component={DefaultOrgPage} name={"DefaultOrgPage"} />
      </Switch>
    </PageWrapper>
  );
};

export default Organization;
