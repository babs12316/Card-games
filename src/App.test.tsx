import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './components/Header';
import Sort from './components/Sort';
import Card from './components/Card';
import Cards from './components/Cards';
import Footer from './components/Footer';


it('renders without crashing', () => {
  shallow(<App />);
});

it("Returns UserName when passed to <Header>", () => {
  const result = shallow(<Header userName="dd" />).contains(<h2 className="navbar-brand">Hello dd </h2>);
  expect(result).to.equal(true);
});

it('HasClass activeAsc assigned to first coloumn when activeAsc passed to <Sort>', () => {
  const wrap = shallow(<Sort activeAscIcon={'activeAsc'} activeDescIcon={'activeDesc'} />);
  expect(wrap.find('.sort table tr td').first().hasClass('activeAsc')).to.equal(true);
  });

it('Hasclass activeDesc assigned to 2nd coloumn when activeDesc passed to <Sort>', () => {
  const wrap = shallow(<Sort activeAscIcon={'activeAsc'} activeDescIcon={'activeDesc'} />);
  expect(wrap.find('.sort table tr td').last().hasClass('activeDesc')).to.equal(true);
});

it('Closes a detailview when clicked on close button in <Cards>', () => {
  const wrap= shallow(<Cards/>);
  wrap.find('#close').simulate('click');
  expect(wrap.find('.hidedetailview').length).to.equal(1);
});

it('Each div in <card> has class overflow-ellipsis', () => {
  const wrap= shallow(<Card  id={1} Real_Name={"dd"} Player_Name={"yy"} Asset={"zz"}/>);
  wrap.find('.overflow-ellipsis').forEach((node) => {
    expect(node.hasClass('overflow-ellipsis')).to.equal(true);
  });
});

it("Returns copyright message when year passed to <Footer>", () => {
  const result = shallow(<Footer year={2019} />).contains( <h2 className="navbar-brand"> Copyright@2019 Deepak Babhale</h2>);
  expect(result).to.equal(true);
});
