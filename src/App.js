import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    import ControlItem from './ControlItem';
    import List from './List';

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          layout: 'list',
        };

        this.switchLayout = this.switchLayout.bind(this);
      }

      switchLayout(layout) {
        this.setState({
          layout,
        });
      }

      render() {
        const { layout } = this.state;
        const { data } = this.props;

        return (
          // Disini kita membuat komponen-komponen kecil yang memiliki tugas spesifik,
          // dengan begitu aplikasi kita lebih mudah untuk dikelola

          <div className="app">
            <div className="controls">

              {/* ControlItem adalah komponen untuk berganti layout */}
              <ControlItem
                layout="list"
                activeLayout={layout}
                onDepressed={this.switchLayout}
              />

              <ControlItem
                layout="grid"
                activeLayout={layout}
                onDepressed={this.switchLayout}
              />
            </div>

            {/* Kita hanya mengirim props yang diperlukan oleh List */}
            <List
              layout={layout}
              data={data}
            />
          </div>
        );
      }
    }

export default App;