import Component from "@glimmer/component";
import { task } from "ember-concurrency-decorators";
import { timeout } from "ember-concurrency";
import { tracked } from "@glimmer/tracking";
export default class TestThingComponent extends Component {
  @tracked status = "initialized";
  @task *waitAFewSeconds() {
    this.status = "Gimme one second...";
    yield timeout(1000);
    this.status = "Gimme one more second...";
    yield timeout(1000);
    this.status = "OK, I'm done.";
    yield timeout(2000);
    this.status = "initialized";
  }
}
