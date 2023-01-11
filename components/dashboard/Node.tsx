export default function Node() {
  return (
    <div className="node">
      <nav className="node-nav">
        <div className="title">Node1</div>
        <div className="actions">
          <button className="dashboard-button button">Restart</button>
          <button className="dashboard-button button">Shutdown</button>
          <button className="dashboard-button button">Shell</button>
          <button className="dashboard-button button">Remove</button>
        </div>
      </nav>

      <div className="node-container">
        {/* <div className="cards"> */}
          {/* <div className="card"></div> */}
          {/* <div className="card"></div> */}
          {/* <div className="card"></div> */}
          {/* <div className="card"></div> */}
        {/* </div> */}

        <div className="card apps">

        </div>
      </div>
    </div>
  )
}
