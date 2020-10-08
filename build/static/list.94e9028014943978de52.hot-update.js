webpackHotUpdate("list",{

/***/ "./packages/f1/src/components/list/list.js":
/*!*************************************************!*\
  !*** ./packages/f1/src/components/list/list.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/f1/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/f1/src/components/list/pagination.js\");\n/* harmony import */ var _list_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-review */ \"./packages/f1/src/components/list/list-review.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);var title='Artiklar';if(data.isAwsmJobOpeningsArchive){title='Career';}if(data.isPrpReviewsArchive){title='Finansinstitut';}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Container,null,data.isPostArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,title),data.isAwsmJobOpeningsArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,title),data.isPrpReviewsArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,title,\" revciew arkiv\"),data.isTaxonomy&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,data.taxonomy,\":\",\" \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source[data.taxonomy][data.id].name))),data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.isAwsmJobOpeningsArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\",{className:\"section job-listing\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"container\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"row\"},data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});})))),data.isPrpReviewsArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\",{className:\"section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"row\"},data.items.map((_ref3)=>{var{type,id}=_ref3;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_list_review__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{key:item.id,item:item});}))),!data.isPrpReviewsArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,data.items.map((_ref4)=>{var{type,id}=_ref4;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"epohgmq0\",label:\"Container\"})( false?undefined:{name:\"o9b79t\",styles:\"list-style:none;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0ZW5zaWRmYWxrL0xvY2FsIFNpdGVzL2tyZWRpdGRlYml0LWZyb250aXR5L3BhY2thZ2VzL2YxL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2dDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJ0ZW5zaWRmYWxrL0xvY2FsIFNpdGVzL2tyZWRpdGRlYml0LWZyb250aXR5L3BhY2thZ2VzL2YxL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmltcG9ydCBSZXZpZXdJdGVtIGZyb20gXCIuL2xpc3QtcmV2aWV3XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGxldCB0aXRsZSA9ICdBcnRpa2xhcic7XG4gIGlmICggZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgKSB7XG4gICAgdGl0bGUgPSAnQ2FyZWVyJztcbiAgfVxuICBpZiAoIGRhdGEuaXNQcnBSZXZpZXdzQXJjaGl2ZSApIHtcbiAgICB0aXRsZSA9ICdGaW5hbnNpbnN0aXR1dCc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgYmxvZyBwb3N0cywgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNQb3N0QXJjaGl2ZSAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG4gICAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIEFXU00gSm9iIGNhcmVlciBwYWdlLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgICAge2RhdGEuaXNQcnBSZXZpZXdzQXJjaGl2ZSAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAge3RpdGxlfSByZXZjaWV3IGFya2l2XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX0gICAgICBcbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG4gICAgXG4gICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICB7ZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gam9iLWxpc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHtkYXRhLmlzUHJwUmV2aWV3c0FyY2hpdmUgJiYgKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJldmlld0l0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgIHshZGF0YS5pc1BycFJldmlld3NBcmNoaXZlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgxYFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTozcmVtO1xuXG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\",{target:\"epohgmq1\",label:\"Header\"})( false?undefined:{name:\"fe1m43\",styles:\"text-align:center;margin-bottom:3rem;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0ZW5zaWRmYWxrL0xvY2FsIFNpdGVzL2tyZWRpdGRlYml0LWZyb250aXR5L3BhY2thZ2VzL2YxL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR3dCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJ0ZW5zaWRmYWxrL0xvY2FsIFNpdGVzL2tyZWRpdGRlYml0LWZyb250aXR5L3BhY2thZ2VzL2YxL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmltcG9ydCBSZXZpZXdJdGVtIGZyb20gXCIuL2xpc3QtcmV2aWV3XCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGxldCB0aXRsZSA9ICdBcnRpa2xhcic7XG4gIGlmICggZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgKSB7XG4gICAgdGl0bGUgPSAnQ2FyZWVyJztcbiAgfVxuICBpZiAoIGRhdGEuaXNQcnBSZXZpZXdzQXJjaGl2ZSApIHtcbiAgICB0aXRsZSA9ICdGaW5hbnNpbnN0aXR1dCc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgYmxvZyBwb3N0cywgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNQb3N0QXJjaGl2ZSAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG4gICAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIEFXU00gSm9iIGNhcmVlciBwYWdlLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgICAge2RhdGEuaXNQcnBSZXZpZXdzQXJjaGl2ZSAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAge3RpdGxlfSByZXZjaWV3IGFya2l2XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX0gICAgICBcbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG4gICAgXG4gICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICB7ZGF0YS5pc0F3c21Kb2JPcGVuaW5nc0FyY2hpdmUgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gam9iLWxpc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHtkYXRhLmlzUHJwUmV2aWV3c0FyY2hpdmUgJiYgKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJldmlld0l0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgIHshZGF0YS5pc1BycFJldmlld3NBcmNoaXZlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgxYFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTozcmVtO1xuXG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mMS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanM/NmRiYiJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInRpdGxlIiwiaXNBd3NtSm9iT3BlbmluZ3NBcmNoaXZlIiwiaXNQcnBSZXZpZXdzQXJjaGl2ZSIsImlzUG9zdEFyY2hpdmUiLCJpc1RheG9ub215IiwidGF4b25vbXkiLCJkZWNvZGUiLCJpZCIsIm5hbWUiLCJpc0F1dGhvciIsImF1dGhvciIsIml0ZW1zIiwibWFwIiwidHlwZSIsIml0ZW0iLCJjb25uZWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FSQU1BLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxHQUFJQyxNQUFLLENBQUcsVUFBWixDQUNBLEdBQUtMLElBQUksQ0FBQ00sd0JBQVYsQ0FBcUMsQ0FDbkNELEtBQUssQ0FBRyxRQUFSLENBQ0QsQ0FDRCxHQUFLTCxJQUFJLENBQUNPLG1CQUFWLENBQWdDLENBQzlCRixLQUFLLENBQUcsZ0JBQVIsQ0FDRCxDQUNELE1BQ0UsMkRBQUMsU0FBRCxNQUVHTCxJQUFJLENBQUNRLGFBQUwsRUFDQywwREFBQyxNQUFELE1BQ0dILEtBREgsQ0FISixDQVFHTCxJQUFJLENBQUNNLHdCQUFMLEVBQ0MsMERBQUMsTUFBRCxNQUNHRCxLQURILENBVEosQ0FhR0wsSUFBSSxDQUFDTyxtQkFBTCxFQUNDLDBEQUFDLE1BQUQsTUFDR0YsS0FESCxrQkFkSixDQW1CR0wsSUFBSSxDQUFDUyxVQUFMLEVBQ0MsMERBQUMsTUFBRCxNQUNHVCxJQUFJLENBQUNVLFFBRFIsS0FDbUIsR0FEbkIsQ0FFRSxtRUFBSUMsdURBQU0sQ0FBQ1osS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ1UsUUFBbEIsRUFBNEJWLElBQUksQ0FBQ1ksRUFBakMsRUFBcUNDLElBQXRDLENBQVYsQ0FGRixDQXBCSixDQTJCR2IsSUFBSSxDQUFDYyxRQUFMLEVBQ0MsMERBQUMsTUFBRCxpQkFDVSxtRUFBSUgsdURBQU0sQ0FBQ1osS0FBSyxDQUFDRSxNQUFOLENBQWFjLE1BQWIsQ0FBb0JmLElBQUksQ0FBQ1ksRUFBekIsRUFBNkJDLElBQTlCLENBQVYsQ0FEVixDQTVCSixDQWtDR2IsSUFBSSxDQUFDTSx3QkFBTCxFQUNHLHFFQUFTLFNBQVMsQ0FBQyxxQkFBbkIsRUFDRSxpRUFBSyxTQUFTLENBQUMsV0FBZixFQUNFLGlFQUFLLFNBQVMsQ0FBQyxLQUFmLEVBRUNOLElBQUksQ0FBQ2dCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFNBQWtCLElBQWpCLENBQUVDLElBQUYsQ0FBUU4sRUFBUixDQUFpQixPQUNoQyxHQUFNTyxLQUFJLENBQUdwQixLQUFLLENBQUNFLE1BQU4sQ0FBYWlCLElBQWIsRUFBbUJOLEVBQW5CLENBQWIsQ0FDQTtBQUNBLE1BQU8sMkRBQUMsa0RBQUQsRUFBTSxHQUFHLENBQUVPLElBQUksQ0FBQ1AsRUFBaEIsQ0FBb0IsSUFBSSxDQUFFTyxJQUExQixFQUFQLENBQ0QsQ0FKQSxDQUZELENBREYsQ0FERixDQW5DTixDQWlER25CLElBQUksQ0FBQ08sbUJBQUwsRUFDUyxxRUFBUyxTQUFTLENBQUMsU0FBbkIsRUFDSSxpRUFBSyxTQUFTLENBQUMsS0FBZixFQUVDUCxJQUFJLENBQUNnQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFOLEVBQVIsQ0FBaUIsT0FDaEMsR0FBTU8sS0FBSSxDQUFHcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFpQixJQUFiLEVBQW1CTixFQUFuQixDQUFiLENBQ0E7QUFDQSxNQUFPLDJEQUFDLG9EQUFELEVBQVksR0FBRyxDQUFFTyxJQUFJLENBQUNQLEVBQXRCLENBQTBCLElBQUksQ0FBRU8sSUFBaEMsRUFBUCxDQUNELENBSkEsQ0FGRCxDQURKLENBbERaLENBK0RHLENBQUNuQixJQUFJLENBQUNPLG1CQUFOLEVBQ0cscUhBQ0NQLElBQUksQ0FBQ2dCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFNBQWtCLElBQWpCLENBQUVDLElBQUYsQ0FBUU4sRUFBUixDQUFpQixPQUM5QixHQUFNTyxLQUFJLENBQUdwQixLQUFLLENBQUNFLE1BQU4sQ0FBYWlCLElBQWIsRUFBbUJOLEVBQW5CLENBQWIsQ0FDQTtBQUNBLE1BQU8sMkRBQUMsa0RBQUQsRUFBTSxHQUFHLENBQUVPLElBQUksQ0FBQ1AsRUFBaEIsQ0FBb0IsSUFBSSxDQUFFTyxJQUExQixFQUFQLENBQ0QsQ0FKRixDQURELENBaEVOLENBeUVFLDBEQUFDLG1EQUFELE1BekVGLENBREYsQ0E2RUQsQ0F2RkQsQ0F5RmVDLHVIQUFPLENBQUN0QixJQUFELENBQXRCLEVBRUEsR0FBTXVCLFVBQVMsa3pKQUFmLENBS0EsR0FBTUMsT0FBTSwrekpBQVoiLCJmaWxlIjoiLi9wYWNrYWdlcy9mMS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgUmV2aWV3SXRlbSBmcm9tIFwiLi9saXN0LXJldmlld1wiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBsZXQgdGl0bGUgPSAnQXJ0aWtsYXInO1xuICBpZiAoIGRhdGEuaXNBd3NtSm9iT3BlbmluZ3NBcmNoaXZlICkge1xuICAgIHRpdGxlID0gJ0NhcmVlcic7XG4gIH1cbiAgaWYgKCBkYXRhLmlzUHJwUmV2aWV3c0FyY2hpdmUgKSB7XG4gICAgdGl0bGUgPSAnRmluYW5zaW5zdGl0dXQnO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIGJsb2cgcG9zdHMsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzUG9zdEFyY2hpdmUgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSBBV1NNIEpvYiBjYXJlZXIgcGFnZSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBd3NtSm9iT3BlbmluZ3NBcmNoaXZlICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cbiAgICAgIHtkYXRhLmlzUHJwUmV2aWV3c0FyY2hpdmUgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIHt0aXRsZX0gcmV2Y2lldyBhcmtpdlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9ICAgICAgXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNUYXhvbm9teSAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbiAgICAgICAgICA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgIFxuICAgICAgey8qIEl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgb2YgdGhlIGxpc3QuICovfVxuICAgICAge2RhdGEuaXNBd3NtSm9iT3BlbmluZ3NBcmNoaXZlICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIGpvYi1saXN0aW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICAgICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApfVxuXG4gICAgICB7ZGF0YS5pc1BycFJldmlld3NBcmNoaXZlICYmIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+IFxuICAgICAgICAgICAgICAgICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXZpZXdJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICB7IWRhdGEuaXNQcnBSZXZpZXdzQXJjaGl2ZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5cbiAgbGlzdC1zdHlsZTogbm9uZTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206M3JlbTtcblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/f1/src/components/list/list.js\n");

/***/ })

})