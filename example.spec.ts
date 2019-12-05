import { renderEditor } from "jest-remirror"
import { EmojiExtension } from "@remirror/extension-emoji"

test("emoticons replaced with emoji", () => {
  const {
    nodes: { p, doc },
    add,
  } = renderEditor({ plainNodes: [], others: [new EmojiExtension()] })

  add(doc(p("<cursor>")))
    .insertText(":-)")
    .callback(content => {
      expect(content.state.doc).toEqualRemirrorDocument(doc(p("😃")))
    })
})

import AnnotationExtension, { AnnotationExtensionOptions } from "./annotationExtension"

// const create = (params: AnnotationExtensionOptions = Object.create(null)) =>
//   renderEditor({
//     others: [new AnnotationExtension(params)],
//   })

// describe("actions", () => {
//   let {
//     getState,
//     add,
//     actions,
//     attrMarks: { link },
//     nodes: { doc, p },
//   } = create()
//
//   beforeEach(() => {
//     ;({
//       getState,
//       add,
//       actions,
//       attrMarks: { link },
//       nodes: { doc, p },
//     } = create())
//   })
//
//   describe(".removeLink", () => {
//     describe("command", () => {
//       it("removes links when selection is wrapped", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("<start>A link<end>"))))
//         actions.removeLink()
//         expect(getState()).toContainRemirrorDocument(p("Paragraph A link"))
//       })
//
//       it("removes the link cursor is within", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("A <cursor>link"))))
//         actions.removeLink()
//         expect(getState()).toContainRemirrorDocument(p("Paragraph A link"))
//       })
//
//       it("removes all links when selection contains multiples", () => {
//         const testLink = link({ href })
//         add(doc(p("<all>", testLink("1"), " ", testLink("2"), " ", testLink("3"))))
//         actions.removeLink()
//         expect(getState()).toContainRemirrorDocument(p("1 2 3"))
//       })
//     })
//
//     describe(".isEnabled()", () => {
//       it("is not enabled when not selected", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph<cursor> ", testLink("A link"))))
//         expect(actions.removeLink.isEnabled()).toBeFalse()
//       })
//
//       it("is enabled with selection wrapped", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("<start>A link<end>"))))
//         expect(actions.removeLink.isEnabled()).toBeTrue()
//       })
//
//       it("is enabled with cursor within link", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("A <cursor>link"))))
//         expect(actions.removeLink.isEnabled()).toBeTrue()
//       })
//
//       it("is enabled with selection of multiple nodes", () => {
//         const testLink = link({ href })
//         add(doc(p("<all>Paragraph ", testLink("A link"))))
//         expect(actions.removeLink.isEnabled()).toBeTrue()
//       })
//     })
//   })
//
//   describe(".updateLink", () => {
//     describe("command", () => {
//       it("creates a link for the selection", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph <start>A link<end>")))
//         actions.updateLink({ href })
//         expect(getState()).toContainRemirrorDocument(p("Paragraph ", testLink("<start>A link<end>")))
//       })
//
//       it("does nothing for an empty selection", () => {
//         add(doc(p("Paragraph <cursor>A link")))
//         actions.updateLink({ href })
//         expect(getState()).toContainRemirrorDocument(p("Paragraph A link"))
//       })
//
//       it("can update an existing link", () => {
//         const testLink = link({ href })
//         const attrs = { href: "https://alt.com" }
//         const altLink = link(attrs)
//         add(doc(p("Paragraph ", testLink("<start>A link<end>"))))
//         actions.updateLink(attrs)
//         expect(getState()).toContainRemirrorDocument(p("Paragraph ", altLink("<start>A link<end>")))
//       })
//
//       it("overwrites multiple existing links", () => {
//         const testLink = link({ href })
//         add(doc(p("<all>", testLink("1"), " ", testLink("2"), " ", testLink("3"))))
//         actions.updateLink({ href })
//         expect(getState()).toContainRemirrorDocument(p(testLink("1 2 3")))
//       })
//     })
//
//     describe(".isActive()", () => {
//       it("is not active when not selected", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph<cursor> ", testLink("A link"))))
//         expect(actions.updateLink.isActive()).toBeFalse()
//       })
//
//       it("is active with selection wrapped", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("<start>A link<end>"))))
//         expect(actions.updateLink.isActive()).toBeTrue()
//       })
//
//       it("is active with cursor within link", () => {
//         const testLink = link({ href })
//         add(doc(p("Paragraph ", testLink("A <cursor>link"))))
//         expect(actions.updateLink.isActive()).toBeTrue()
//       })
//
//       it("is active with selection of multiple nodes", () => {
//         const testLink = link({ href })
//         add(doc(p("<all>Paragraph ", testLink("A link"))))
//         expect(actions.updateLink.isActive()).toBeTrue()
//       })
//     })
//
//     describe(".isEnabled()", () => {
//       it("is enabled when text is selected", () => {
//         add(doc(p("Paragraph <start>A<end> link")))
//         expect(actions.updateLink.isEnabled()).toBeTrue()
//       })
//
//       it("is not enabled for empty selections", () => {
//         add(doc(p("Paragraph <cursor>A link")))
//         expect(actions.updateLink.isEnabled()).toBeFalse()
//       })
//
//       it("is not enabled for node selections", () => {
//         add(doc(p("Paragraph <node>A link")))
//         expect(actions.updateLink.isEnabled()).toBeFalse()
//       })
//     })
//   })
// })

// describe("keys", () => {
//   const activationHandler = jest.fn(() => true)
//   const create = () => renderEditor({ others: [new AnnotationExtension({ activationHandler })] })
//   it("overrides for keyboard shortcut", () => {
//     const { p, doc, add } = create()
//     add(doc(p("<cursor>")))
//       .insertText("Text goes here")
//       .shortcut("Ctrl-h")
//       .callback(() => {
//         // expect(mocks.getState).toHaveBeenCalledTimes(1)
//         // expect(dispatcher).toHaveBeenCalledTimes(1)
//       })
//   })
// })
