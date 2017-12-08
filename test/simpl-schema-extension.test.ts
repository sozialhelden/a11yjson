import SimpleSchema from 'simpl-schema';

// import '../src/simpl-schema-extensions';
import { evaluateAccessibilitySchemaExtension } from '../src/simpl-schema-extensions';

const SchemaWithQuestionArray = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    accessibility: {
      question: ['question1']
    }
  }
});

const SchemaWithEmptyQuestionArray = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    accessibility: {
      question: []
    }
  }
});

const SchemaWithSimpleQuestionFunction = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    accessibility: {
      question: () => 'question',
      questionMore: () => 'questionMore',
      questionBlockBegin: () => 'questionBlockBegin'
    }
  }
});

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

const SchemaWithNoQuestions = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    accessibility: {}
  }
});

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

describe('Simple-Schema Accessibility Extension', () => {
  it('Arrays are sampled', () => {
    const definition = SchemaWithQuestionArray.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    expect(evaluated.question).toBeDefined();
    expect(typeof evaluated.question).toEqual('string');
    expect(evaluated.question).toEqual('question1');
  });
  it('Empty Arrays return undefined value', () => {
    const definition = SchemaWithEmptyQuestionArray.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    expect(evaluated.question).not.toBeDefined();
  });
  it('Strings are used', () => {
    const definition = SchemaWithStringQuestion.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).toBeDefined();
      expect(typeof evaluated[field]).toEqual('string');
      expect(evaluated[field]).toEqual(field);
    }
  });
  it('Functions are evaluated', () => {
    const definition = SchemaWithSimpleQuestionFunction.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).toBeDefined();
      expect(typeof evaluated[field]).toEqual('string');
      expect(evaluated[field]).toEqual(field);
    }
  });
  it('Empties are skipped', () => {
    const definition = SchemaWithNoQuestions.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).not.toBeDefined();
    }
  });
  it('Invalid types are skipped', () => {
    const definition = SchemaWithBadlyTypedQuestions.getDefinition('name', ['accessibility']);

    const evaluated = evaluateAccessibilitySchemaExtension(definition.accessibility);
    const fields = ['question', 'questionMore', 'questionBlockBegin'];
    for (const field of fields) {
      expect(evaluated[field]).not.toBeDefined();
    }
  });
});
