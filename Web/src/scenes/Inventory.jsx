import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { TextField, MenuItem, InputBase, IconButton } from "@mui/material";
const Inventory = () => {
  useEffect(() => {
    document.title = "Inventory | BizCart";
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title fw-semibold">Inventory</h3>
            <p className="mb-0">
              All the available categories display as below.
            </p>
            <hr />
            <div className="head-section">
              <button className="btn btn-info m-1" >
                Add New Category
              </button>
              <div className="input-group" id="searchh">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </div>
            <div className="table-responsive" style={{ marginTop: "40px" }}>
              <MDBTable hover>
                <MDBTableHead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">CID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope="row">1</th>
                    <td>PID1234</td>
                    <td>VID5678</td>
                    <td>Product 1</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Upgrade Lecture">
                        <SettingsApplicationsRoundedIcon
                          style={{
                            cursor: "pointer",
                            marginRight: "15px",
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Delete Video">
                        <DeleteForeverRoundedIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>PID2234</td>
                    <td>VID6678</td>
                    <td>Product 2</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Upgrade Lecture">
                        <SettingsApplicationsRoundedIcon
                          style={{
                            cursor: "pointer",
                            marginRight: "15px",
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Delete Video">
                        <DeleteForeverRoundedIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>PID3234</td>
                    <td>VID7678</td>
                    <td>Product 3</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Upgrade Lecture">
                        <SettingsApplicationsRoundedIcon
                          style={{
                            cursor: "pointer",
                            marginRight: "15px",
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Delete Video">
                        <DeleteForeverRoundedIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
