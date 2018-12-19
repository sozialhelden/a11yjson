import { makeQuestionContext } from '../src/index';
import SimpleSchema from 'simpl-schema';

import { evaluateAccessibilitySchemaExtension } from '../src/SimpleSchemaExtensions';

describe('Simple-Schema Accessibility Extension', () => {
  it('Arrays are sampled', () => {
    const SchemaWithQuestionArray = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {
          question: ['question1']
        }
      }
    });
    const definition = SchemaWithQuestionArray.getDefinition('name', ['accessibility']);

    const context = makeQuestionContext('name', 'test', SchemaWithQuestionArray);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    expect(evaluated.question).toBeDefined();
    expect(typeof evaluated.question).toEqual('string');
    expect(evaluated.question).toEqual('question1');
  });
  it('Empty Arrays return undefined value', () => {
    const SchemaWithEmptyQuestionArray = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {
          question: []
        }
      }
    });
    const definition = SchemaWithEmptyQuestionArray.getDefinition('name', ['accessibility']);

    const context = makeQuestionContext('name', 'test', SchemaWithEmptyQuestionArray);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    expect(evaluated.question).not.toBeDefined();
  });
  it('Strings are used', () => {
    const SchemaWithStringQuestion = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {
          question: 'question',
          questionMore: 'questionMore',
          questionBlockBegin: 'questionBlockBegin'
        }
      }
    });

    const definition = SchemaWithStringQuestion.getDefinition('name', ['accessibility']);

    const context = makeQuestionContext('name', 'test', SchemaWithStringQuestion);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).toBeDefined();
      expect(typeof evaluated[field]).toEqual('string');
      expect(evaluated[field]).toEqual(field);
    }
  });
  it('Functions are evaluated', () => {
    const mockQuestionFn = jest.fn().mockReturnValue('question');
    const mockQuestionMoreFn = jest.fn().mockReturnValue('questionMore');
    const mockQuestionBlockBeginFn = jest.fn().mockReturnValue('questionBlockBegin');
    const SchemaWithSimpleQuestionFunction = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {
          question: mockQuestionFn,
          questionMore: mockQuestionMoreFn,
          questionBlockBegin: mockQuestionBlockBeginFn
        }
      }
    });

    const definition = SchemaWithSimpleQuestionFunction.getDefinition('name', ['accessibility']);
    const context = makeQuestionContext('name', 'test', SchemaWithSimpleQuestionFunction);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).toBeDefined();
      expect(typeof evaluated[field]).toEqual('string');
      expect(evaluated[field]).toEqual(field);
    }
    expect(mockQuestionFn).toHaveBeenCalledWith(context);
    expect(mockQuestionMoreFn).toHaveBeenCalledWith(context);
    expect(mockQuestionBlockBeginFn).toHaveBeenCalledWith(context);
  });
  it('Empties are skipped', () => {
    const SchemaWithNoQuestions = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {}
      }
    });
    const definition = SchemaWithNoQuestions.getDefinition('name', ['accessibility']);

    const context = makeQuestionContext('name', 'test', SchemaWithNoQuestions);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).not.toBeDefined();
    }
  });
  it('Invalid types are skipped', () => {
    const SchemaWithBadlyTypedQuestions = new SimpleSchema({
      name: {
        type: String,
        optional: true,
        accessibility: {
          question: new Date(),
          questionMore: new Date(),
          questionBlockBegin: new Date()
        }
      }
    });
    const definition = SchemaWithBadlyTypedQuestions.getDefinition('name', ['accessibility']);

    const context = makeQuestionContext('name', 'test', SchemaWithBadlyTypedQuestions);
    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility, context);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).not.toBeDefined();
    }
  });
});
