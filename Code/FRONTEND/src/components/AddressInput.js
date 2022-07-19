class AddressInput extends Component {
    render() {
      return (
        <div className="card"><div className="card-body">
        <AddressItem label="Street" value={this.props.street} placeholder="" readonly="true" />
        <AddressItem label="City" value={this.props.city} placeholder="" readonly="true" />
        <AddressItem label="State" value={this.props.state} placeholder="" readonly="true" />
        <AddressItem label="Postal Code" value={this.props.code} placeholder="" readonly="true" />
        <AddressItem label="Country" value={this.props.country} placeholder="" readonly="true" />
        </div></div>
      );
    }
  }