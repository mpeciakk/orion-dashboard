import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import Node from "../components/dashboard/Node"

export default function Panel() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-logo">
        <h3>Orion</h3>
      </div>

      <nav className="dashboard-nav">
        <button className="dashboard-button button">Profile</button>
      </nav>

      <aside className="dashboard-panel">
        <div className="dashboard-panel-create-app">
          <button className="dashboard-button button">Create App</button>
        </div>

        <Accordion allowMultipleExpanded allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Node1</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="apps">
                <li>proces1</li>
                <li>proces2</li>
                <li>proces3</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Node2</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="apps">
                <li>proces1</li>
                <li>proces2</li>
                <li>proces3</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </aside>

      <div className="dashboard-container">
        <Node />
      </div>
    </div>
  )
}
