import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { CommandsTable } from "@site/src/components/CommandsTable";
import { commands } from "@site/src/tableHome/commands.table";
import { columns } from "@site/src/tableHome/columns.table";

export default function Start() {
  return (
    <>
      <PageMetadata
        title='aka.cmd.ms'
      />
      <Layout>
        <main className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-0">
              <h1 className="hero__title">
                  💻→aka.cmd.ms
              </h1>
              <p>Your aka.ms quick links all in one place!</p>
              <p>🔔 Is your favorite aka.ms link missing? Click <a href='Add New aka.ms link'></a></p>
            </div>
            <div className="col col--offset-0">
              <CommandsTable columns={columns} data={commands} applyFilter="" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}