import React, { Component } from "react";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from "@rmwc/toolbar";

import { TabBar, Tab } from "@rmwc/tabs";

import {
  GridList,
  GridTile,
  GridTileIcon,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle
} from "@rmwc/grid-list";

import { Checkbox } from "@rmwc/checkbox";
import { Select } from "@rmwc/select";

import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerSubtitle
} from "@rmwc/drawer";

import { List, ListItem } from "@rmwc/list";

import "@material/toolbar/dist/mdc.toolbar.min.css";
import "@material/top-app-bar/dist/mdc.top-app-bar.min.css";
import "@material/grid-list/dist/mdc.grid-list.css";
import "@material/select/dist/mdc.select.min.css";
import "@material/checkbox/dist/mdc.checkbox.min.css";
import "@material/drawer/dist/mdc.drawer.min.css";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

class App extends Component {
  state = {
    tileGutter1: false,
    headerCaption: false,
    twolineCaption: false,
    withIconAlignStart: false,
    modalOpen: false,
    activeTab: 0
  };
  render() {
    const { modalOpen, activeTab } = this.state;
    return (
      <div className="App">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon
                icon="menu"
                onClick={() => this.setState({ modalOpen: !modalOpen })}
              />
              <ToolbarTitle>Toolbar</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection alignEnd>
              <ToolbarIcon icon="save" />
              <ToolbarIcon icon="print" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <Drawer modal open={modalOpen} onClose={() => this.setState({ modalOpen: false })}>
          <DrawerHeader>
            <DrawerTitle>DrawerHeader</DrawerTitle>
            <DrawerSubtitle>Subtitle</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <section className="content">
          <GridList
            tileGutter1={this.state.tileGutter1}
            headerCaption={this.state.headerCaption}
            twolineCaption={this.state.twolineCaption}
            withIconAlignStart={this.state.withIconAlignStart}
            tileAspect={this.state.tileAspect}>
            {[...Array(4)].map((val, i) => (
              <GridTile key={i}>
                <GridTilePrimary>
                  <GridTilePrimaryContent>
                    <img
                      src="https://material-components-web.appspot.com/images/1-1.jpg"
                      alt="test"
                    />
                  </GridTilePrimaryContent>
                </GridTilePrimary>
                <GridTileSecondary>
                  <GridTileIcon icon="info" />
                  <GridTileTitle>Tile {i + 1}</GridTileTitle>
                </GridTileSecondary>
              </GridTile>
            ))}
          </GridList>

          <Checkbox
            label="tileGutter1"
            onClick={() => this.setState({ tileGutter1: !this.state.tileGutter1 })}
          />
          <Checkbox
            label="headerCaption"
            onClick={() => this.setState({ headerCaption: !this.state.headerCaption })}
          />
          <Checkbox
            label="twolineCaption"
            onClick={() => this.setState({ twolineCaption: !this.state.twolineCaption })}
          />
          <Checkbox
            label="withIconAlignStart"
            onClick={() => this.setState({ withIconAlignStart: !this.state.withIconAlignStart })}
          />

          <Select
            value={this.state.tileAspect || "1x1"}
            onChange={evt => this.setState({ tileAspect: evt.target.value })}
            label="tileAspect"
            options={["1x1", "16x9", "2x3", "3x2", "4x3", "3x4"]}
          />
        </section>
        <section className="content">
          {/* Controlled */}
          <TabBar
            activeTabIndex={activeTab}
            onActivate={evt => this.setState({activeTab: evt.detail.index})}
          >
            <Tab>Cookies</Tab>
            <Tab>Pizza</Tab>
            <Tab>Icecream</Tab>
          </TabBar>
        </section>
      </div>
    );
  }
}

export default App;
