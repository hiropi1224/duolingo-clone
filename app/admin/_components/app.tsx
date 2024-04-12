"use client";

import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";

import { ChallengeOptionCreate } from "~/app/admin/challengeOptions/create";
import { ChallengeOptionEdit } from "~/app/admin/challengeOptions/edit";
import { ChallengeOptionList } from "~/app/admin/challengeOptions/list";
import { ChallengesCreate } from "~/app/admin/challenges/create";
import { ChallengesEdit } from "~/app/admin/challenges/edit";
import { ChallengeList } from "~/app/admin/challenges/list";
import { CourseCreate } from "~/app/admin/course/create";
import { CourseEdit } from "~/app/admin/course/edit";
import { CourseList } from "~/app/admin/course/list";
import { LessonCreate } from "~/app/admin/lesson/create";
import { LessonEdit } from "~/app/admin/lesson/edit";
import { LessonList } from "~/app/admin/lesson/list";
import { UnitCreate } from "~/app/admin/unit/create";
import { UnitEdit } from "~/app/admin/unit/edit";
import { UnitList } from "~/app/admin/unit/list";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
      />
      <Resource
        name="lessons"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation="title"
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        create={ChallengesCreate}
        edit={ChallengesEdit}
        recordRepresentation="title"
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation="title"
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
};

export default App;
