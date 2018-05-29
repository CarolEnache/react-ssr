import "raf/polyfill";
import { configure } from "enzyme";
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

consfigure( { adapter: new ReactSixteenAdapter() } );