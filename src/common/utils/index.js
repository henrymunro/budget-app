import React from "react";
import { Iterable } from "immutable";

export const toJS = WrappedComponent => {
  const ImmutableToJSWrapper = wrappedComponentProps => {
    const KEY = 0;
    const VALUE = 1;

    const propsJS = Object.entries(wrappedComponentProps).reduce(
      (newProps, wrappedComponentProp) => {
        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
          wrappedComponentProp[VALUE]
        )
          ? wrappedComponentProp[VALUE].toJS()
          : wrappedComponentProp[VALUE];
        return newProps;
      },
      {}
    );

    return <WrappedComponent {...propsJS} />;
  };

  ImmutableToJSWrapper.displayName = "ImmutableToJSWrapper";
  return ImmutableToJSWrapper;
};

export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "");
}

export const findClosestId = e =>
  e.target.closest("[data-id]").getAttribute("data-id");

export const removeIdFromList = (reducerState, listName, _id) =>
  reducerState.set(
    listName,
    reducerState.get(listName).filterNot(type => type._id === _id)
  );
