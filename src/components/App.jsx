// import { Routes } from 'react-router-dom';
import { Component } from 'react';
import { MaterialEditor } from './MaterialEditor/MaterialEditor';
import { MaterialList } from './MaterialList/MaterialList';
import * as API from '../services/api';
export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false }); // тут от предыдущего не нужно потому что массив изеначально пустой
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }
  // добавление каждый раз делаем от предыдущего
  addMaterial = async values => {
    try {
      // this.setState({ isLoading: true }); // перед тем как отправить меняем стейт
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [material, ...state.materials],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id); // кидаем айди глубже
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <>
        {error && <p>Ой! Что-то пошло не так</p>}
        <MaterialEditor onSubmit={this.addMaterial} />

        {isLoading ? (
          'Loading...'
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </>
    );
  }
}
