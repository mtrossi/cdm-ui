import React, { Component } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import UserProfile from "./UserProfile";
import SelectInput from "@material-ui/core/Select/SelectInput";
import BaseCharacterSelect from "./BaseCharacterSelect";

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default class CampaignCharacterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }
  render() {
    return (
      <BaseCharacterSelect
        handleChange={this.props.handleChange}
        label="Player"
        items={this.props.items}
        value={this.props.value}
      ></BaseCharacterSelect>
    );
  }
}
