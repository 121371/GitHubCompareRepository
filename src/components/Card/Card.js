import React from "react";
import { Card } from "antd";
import './Card.css';

const CardComponent = ({ userName, followers, following, repo, gist }) => {
  return (
    <Card className="card">
      <p><b>UserName:</b> {userName}</p>
      <p><b>Followers:</b> {followers}</p>
      <p><b>Following:</b> {following}</p>
      <p><b>Public Repo:</b> {repo}</p>
      <p><b>Gist:</b> {gist}</p>
    </Card>
  );
};

export default CardComponent;

