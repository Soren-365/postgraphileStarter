/* eslint-disable no-undef */

import type { imagePlacement } from "../redux/reducers/appstate";

import {
  useGetMyDestinationQuery,
  useUpdateDestinationMutation,
  GetMyDestinationQuery,
  UpdateDestinationMutation,
} from "@app/graphql";
import {
  Button,
  Card,
  Code,
  Elevation,
  FileInput,
  H1,
  H2,
  H3,
  H5,
  Pre,
} from "@blueprintjs/core";

import React, { useEffect, useState, FormEvent } from "react";

import { connect, useDispatch } from "react-redux";

import { withApollo } from "../../../lib/src/withApollo";
// import { destinationresourceDbType } from "../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType";
import { DbTables } from "../functions/__generatedFromBackend__/tableEnums";
// import { fetchImageFromS3 } from '../lib/functions/fetch/fetchImagefromS3';
import { getSignedUrlFromS3 } from "../functions/fetch/fetchSignedUrlfromS3";
import {
  loadS3Object_,
  uploadImageToS3,
} from "../redux/actions/api/s3Creators";

import { APPSTATE } from "../redux/types/types";

import withReduxSaga from "../redux/withReduxSaga";

import { AppState } from "../redux/reducers/appstate";

import { accountType } from "../redux/reducers/account";

import { placeholderS3ObjectType, S3StoreType } from "../redux/reducers/s3";
// import { saveClientDbData } from "../redux/sagas/dbSaga";

interface DestinationProps {
  placeholderData: unknown;
  title: string;
  state: { account: accountType; appstate: AppState; s3: S3StoreType };
  props: any;
  imageS3Type: placeholderS3ObjectType;
  loadS3Object_(arg0: input): unknown;
  appstate: AppState;
}

type input = {
  url: string;
  name: string;
};

interface ListProps {
  list: ImageFile[];
}

type ImageFile = {
  name: string;
  size: number;
};

const Destination: React.FC<DestinationProps> = ({
  title,
  placeholderData,
  state,
  imageS3Type,
  appstate,
  ...props
}) => {
  const dispatch = useDispatch();
  const { userId } = state.account; // user id = account id
  const userType = "agencies"; // This app in present version is for agencies only
  const agencyId = state.account.agencyId;
  const resourceType = DbTables.destinationresource; // correct this if not in Destination.tsx
  const resourceId = state.appstate.now_showing_resourceId;
  const [destinationDbObject, setDestinationDbObject] = useState(
    state.appstate.view.object
  );
  // const imageFile = {} as ImageFile;
  // const { data, loading, error } = useAgencydestinationQuery();
  // console.log("resourceId:", resourceId)

  const { data, loading, error } = useGetMyDestinationQuery({
    variables: { id: resourceId },
  });

  //   let DestinationHub = new resourceClass({agencyId: agencyId, resourceType: resourceType, resourceId: resourceId, user: user, name: "DestinationHub"})

  //   Object.defineProperties(book, {
  //     year_: {
  //     value: 2017
  //     },

  //     edition: {
  //     value: 1
  //     },

  //     year: {
  //     get() {
  //     return this.year_;
  //     },

  //     set(newValue) {
  //     if (newValue> 2017) {
  //     this.year_ = newValue;
  //     this.edition += newValue - 2017;
  //     }
  //     }
  //     }
  // });

  //   console.log(Object.getOwnPropertyDescriptors(DestinationHub));

  // const keyToLocalStorage = `${resourceType}/` + JSON.stringify(resourceId);
  // const dataObject: GetMyDestinationQuery = JSON.parse(localStorage.getItem(keyToLocalStorage));
  // const [stateDb, setStateDb] = useState(dataObject);

  //////////////////////////

  const imagePlacement = {
    mainImage: "mainImage",
    guideImage: "guideImage",
    mapImage: "mapImage",
    thumbnailImage: "thumbnailImage",
    imageGallery: "imageGallery",
  };

  // const [emailHash, setemailHash] = useState('');
  // const [passwordHash, setpasswordHash] = useState('');
  // const [createdById, setcreatedById] = useState('');
  // const [userEmail, setuserEmail] = useState('');
  // const [firstName, setfirstName] = useState('');
  // const [lastName, setlastName] = useState('');

  const [ImageFiles, setImageFiles] = useState<ImageFile[]>([
    { name: "default", size: 0 },
  ]);

  const [ImageUrls, setImageUrls] = useState<imagePlacement>();

  // console.log("clientDb printout test (agency):", clientDbd.Table.("timeCreated"))
  // console.log("clientDb printout test (agency):", clientDbd.agency)

  // console.log("UPDATING AGAIN !!!", { placeholderData,  title,  state,  imageS3Type,  appstate,  loadS3Object_, props})

  // const [guideImageUrl, setGuideImageUrl] = useState<{signedUrls: AppState["signedUrls"] }>();

  // const { loading, data } = useQuery<Destination>(destinationQ, {
  //   variables: { destinationId: resourceId },
  //   // fetchPolicy: 'network-only',
  //   // errorPolicy: 'all',
  // });

  // const dataUsers = data;
  // const loadingUsers = loading;

  // console.log('state', state);
  // console.log('props', props);

  useEffect(() => {
    //console.log(db.contacts.get.name);

    setDestinationDbObject(state.appstate.view.object);
    const keyToLocalStorage = `${resourceType}/${resourceId}`;
    //  console.log("keyToLocalStorage:", keyToLocalStorage)
    const dataObject = JSON.parse(localStorage.getItem(keyToLocalStorage)!);
    if (dataObject) {
      //  console.log("dataObject:", dataObject)
      const {
        signedUrls,
      }: {
        signedUrls: AppState["signedUrls"];
      } = dataObject?.destinationresource;
      // console.log("signedUrls['mainImage']", signedUrls);
      setImageUrls({ ...signedUrls });
      ListObject(data);
    }

    if (state.appstate.upload_done) {
      dispatch({ type: APPSTATE.S3_OBJECT_REFRESH_SUCCESS }); // emulating a destination page
    }
    //  console.log('useEFFECT executed');
  }, [
    state.appstate.upload_done,
    state.appstate.view.object,
    resourceType,
    resourceId,
    data,
    dispatch,
  ]); //,

  const DisplayImage = (elem: any) => {
    // const buf = fetched.data?.Body;
    // Create an HTML img tag
    if (elem !== undefined) {
      return (
        <>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/static/images/sharp/3980a7f4518198410559261afcfd768a-500.webp"
            />
            <source
              media="(max-width: 700px)"
              srcSet="/static/images/sharp/5414f38299552c211f0b4e50ab149134-700.webp"
            />
            <source
              media="(max-width: 900px)"
              srcSet="/static/images/sharp/cf7dae5fd04ea4d142955ed705ad5935-900.webp"
            />
            <img
              src="/static/images/sharp/66e6d60512218363c4cf5faef2069295-1190.png"
              alt="Castle"
              className="w-auto"
            />
          </picture>
        </>
      );
    }
    return <img id="emptyElement"></img>;
  };

  const List = (props: ListProps) => {
    return (
      <>
        {" "}
        {props.list.map((value, index) => (
          <div key={index}>
            <span>{value.name}</span>
            <span>{value.size}</span>
          </div>
        ))}{" "}
      </>
    );
  };

  const ListObject = (props: {} | null | undefined) => {
    return (
      <div>
        <span>{props}</span>
      </div>
    );
  };

  // const createdByIdInt = parseInt(createdById);
  // const [createUser, { error }]: any = useMutation(createuserM, {
  //   variables: { emailHash, passwordHash, createdByIdInt, userEmail, firstName, lastName },
  //   refetchQueries: ['Users'],
  // });

  if (data) {
    // If data !== localstorage, then send data to component state(display) && Copy to localstorage after
    //  console.log('data', data);
    // console.log('data.destinationresource.lastModified', data?.destinationresource?.lastModified);
    // console.log('stateDb', stateDb);
    // console.log('stateDb?.destinationresource.lastModified', stateDb?.destinationresource?.lastModified);
    // if (!stateDb || data?.destinationresource?.lastModified > stateDb?.destinationresource?.lastModified)  {
    // console.log('data', data);
    //convert the signedUrls string to key:value object
    // const signedUrlsArrayOfObjects =  data.destinationresource?.signedUrls?.map((value, index) => {
    //    const arrayOf2 = value[index].split(":")
    //    const objectOf2 = { ...arrayOf2 }
    //    return objectOf2
    //   })
    //  setStateDb(data)
    //   const { destinationresource } = data
    // // console.log("convSignedUrls", signedUrlsArrayOfObjects)
    // const compositeData = { ...destinationresource, ...{ signedUrls: signedUrlsArrayOfObjects }}
    // console.log("compositeData", compositeData)
    // console.log("data", data)
    // // send data to component state (update)
    // setStateDb(compositeData);
    // // and then copy to local storage
    // localStorage.setItem(keyToLocalStorage, dataString);
    // console.log("LocalStorage written to from data")
    // // else do nothing
    // }
  }

  if (error) {
    console.log(" Destination: error", error);
  }

  function displayImages(files: string | any[]) {
    // console.log('files', files);
    if (!files.length) {
      document.getElementById("ImageFile")!.innerHTML =
        "<p>No files selected!</p>";
    } else {
      document.getElementById("ImageFile")!.innerHTML = "";
      const list = document.createElement("ul");
      document.getElementById("ImageFile")!.appendChild(list);
      for (let i = 0; i < files.length; i++) {
        const li = document.createElement("li");
        list.appendChild(li);
        const img = document.createElement("img");
        img.src = URL.createObjectURL(files[i]);
        img.height = 60;
        img.onload = function () {
          URL.revokeObjectURL(img.src);
        };
        li.appendChild(img);
        const info = document.createElement("span");
        info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
        li.appendChild(info);
      }
    }
  }

  interface HTMLInputEvent extends FormEvent {
    target: HTMLInputElement;
  }

  function onSelectFile(ev: HTMLInputEvent, imagePlacement: string) {
    ev.preventDefault();
    // console.log('Event', ev);
    const { files }: any = ev.target;
    console.log("files typeof", typeof files);

    console.log("target", ev.target);
    const ImageFiles = [...files];

    setImageFiles(ImageFiles);
    displayImages(ImageFiles);

    // uploadToS3({url: `${userType}/${agencyId}/${resourceType}/${resourceId}/mainImage` , placementName: `mainImage` , file: ImageFile[1] })
    const imgURL = URL.createObjectURL(ImageFiles[0]);
    console.log("imgURL", imgURL);
    const amazonURL = `${userType}/${agencyId}/${resourceType}/${resourceId}/${imagePlacement}`;
    urlToUpload(imgURL, amazonURL, imagePlacement);
  }

  function urlToUpload(
    url: RequestInfo,
    amazonUrl: string,
    imagePlacement: string
  ) {
    const dispatch = useDispatch();
    fetch(url)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        dispatch(uploadImageToS3({ file: blob, amazonUrl })).then(
          (res: any) => {
            console.log("res.location:", res.location);

            getSignedUrlFromS3({
              url: `${userType}/${agencyId}/${resourceType}/${resourceId}`,
              name: `${imagePlacement}`,
              expires: 604800,
            })
              .then((fetchedUrl: any) => {
                // async refresh page:
                console.log("This is the fetched URL", fetchedUrl);
                setImageUrls({
                  ...ImageUrls,
                  [imagePlacement]: fetchedUrl.url,
                });
                console.log("ImageUrls", ImageUrls);
                dispatch({
                  type: APPSTATE.S3_OBJECT_REFRESH_REQUEST,
                  message: res,
                });

                // preparations for localstorage resource update:
                const keyToLocalStorage = `${resourceType}/${resourceId}`;
                const dataObject: GetMyDestinationQuery = JSON.parse(
                  localStorage.getItem(keyToLocalStorage)!
                );
                var date = Date.now() + 7 * 24 * 60 * 60 * 1000;
                let toTimestamp = (date: string | number | Date) =>
                  new Date(date);

                const newSignedUrls = {
                  ...dataObject.destinationresource,
                  [imagePlacement]: fetchedUrl.url,
                };

                const newProps = {
                  signedUrls: newSignedUrls,
                  urlExperyAt: toTimestamp(date).toDateString(),
                  lastModified: toTimestamp(Date.now()).toDateString(),
                  lastModifiedBy: userId,
                };
                const newObject = {
                  ...dataObject.destinationresource,
                  ...newProps,
                };

                //  saveClientDbData({agencyId: agencyId, tableKey: resourceType, tableData: newObject})

                const newDataString = JSON.stringify({
                  destinationresource: newObject,
                });
                localStorage.setItem(keyToLocalStorage, newDataString);

                //  MUTATE TO POSTGRES (single source of truth)!
                console.log("newSignedURLS", newSignedUrls);
                const newSignedUrlsArray = Object.values(newSignedUrls);
                console.log("newSignedURLSArray", newSignedUrlsArray);
                const newSignedUrlsArrayKeys = Object.keys(newSignedUrls);
                console.log("newSignedURLSArrayKeys", newSignedUrlsArrayKeys);
                const newSignedUrlsArrayStrings = newSignedUrlsArray.map(
                  (value, index) => `${newSignedUrlsArrayKeys[index]}:${value}`
                );
                console.log(
                  "newSignedURLSArrayStrings",
                  newSignedUrlsArrayStrings
                );

                const [
                  updateDestinationResource,
                  { loading, data, error },
                ] = useUpdateDestinationMutation();

                updateDestinationResource({
                  variables: {
                    lastModified: newProps.lastModified,
                    lastModifiedBy: newProps.lastModifiedBy!,
                  },
                });
                if (error) {
                  console.log("Error! in useUpdateDestinationMutation:", error);
                }
                if (data) {
                  const data1: UpdateDestinationMutation = data;
                  console.log("data! in useUpdateDestinationMutation:", data1);
                }
                if (loading) {
                  console.log(
                    "Loading! in useUpdateDestinationMutation:",
                    loading
                  );
                }
              })
              .catch((error) => console.log(error));
          }
        );
      });
  }

  function getImgFromS3() {
    console.log("In Destination: Button clicked for loadS3Object");
    loadS3Object_({
      url: `${userType}/${agencyId}/${resourceType}/${resourceId}/mainImage`,
      name: "third_image",
    });
  }

  function incResource(inc: number) {
    dispatch({ type: APPSTATE.INCREMENT_RESOURCE, inc: inc });
  }
  return (
    <React.Fragment>
      <div className="sub_container">
        <div className="flex_containers one">
          <Button text="DEC RESOURCE" onClick={() => incResource(-1)} />
          <Button text="INC RESOURCE" onClick={() => incResource(+1)} />

          <H1>
            {destinationDbObject?.destinationName || "HEY, No data yet..."}
          </H1>
        </div>
        <div className="flex_containers two content-center ">
          <div className="pt-20">
            <FileInput
              id="input"
              buttonText="Main Image"
              text="choose file"
              inputProps={{ multiple: false }}
              onInputChange={(event: any) =>
                onSelectFile(event, imagePlacement.mainImage)
              }
            />
            <a href="#" id="fileSelect">
              Select some files
            </a>
            <div id="ImageFile"></div>
            <List list={ImageFiles} />

            <FileInput
              id="input"
              buttonText="Guide Image"
              text="choose file"
              inputProps={{ multiple: false }}
              onInputChange={(event: any) =>
                onSelectFile(event, imagePlacement.guideImage)
              }
            />
          </div>
          <Button text="Get image from s3" onClick={() => getImgFromS3()} />

          <Card interactive={true} elevation={Elevation.TWO}>
            <H5>
              <a href="#">Card heading</a>
            </H5>
            {/* <DisplayImage data={state.s3?.placeholderS3Object} /> */}
            <p>Card content</p>
            <div className="w-40"></div>
            <img src={ImageUrls && ImageUrls["mainImage"]} />
            {/*<img srcSet={responsiveImage.srcSet} src={responsiveImage.src}></img> */}
            <Button>Submit</Button>
          </Card>
          <Card interactive={true} elevation={Elevation.TWO}>
            <H5>
              <a href="#">Card heading</a>
            </H5>
            <p>Card content</p>
            <DisplayImage data={"sumeData"} />
            <Button>Submit</Button>
          </Card>
          <Card interactive={true} elevation={Elevation.TWO}>
            <H5>
              <a href="#">Card heading</a>
            </H5>

            <img src={ImageUrls && ImageUrls["guideImage"]} />

            <Button
              text="Get image from s3"
              onClick={(event: any) =>
                onSelectFile(event, imagePlacement.guideImage)
              }
            >
              Submit
            </Button>
          </Card>
        </div>
        <div className="flex_containers three">
          <H2>---</H2>
          {loading || !data ? (
            <H3>Loading...</H3>
          ) : (
            // <div>
            //   <H4>
            //     Number of destination resources in DB: <span className="text-2xl">{data.agencydestinations.totalCount}</span>
            //   </H4>{' '}
            //   <div>
            //     <H3>list of destinationresources </H3>
            //     {data.agencydestinations.nodes.map((node, index) => (
            //              <div key={index}>
            //         <hr></hr>
            //         <br></br>
            //           <H3>Resource Id: {node.destinationId}</H3>
            //           <H4>At agencyId: {node.agencyId}</H4>
            //           <H4>Modified By UserId: {node.modifiedByUser}</H4>
            //           <H4>Url experies at: {node.urlExperyAt}</H4>
            //           <H4>Last Modified: {node.lastModified}</H4>
            //         </div>
            //       ))}{' '}
            //   </div>
            // </div>
            // <div>
            //   <H4>
            //     Number of destination resources in DB: <span className="text-2xl">{data.destinationresources.totalCount}</span>
            //   </H4>{' '}
            //   <div>
            //     <H3>list of destinationresources </H3>
            //     {data.destinationresources.nodes.map((node, index) => (
            //       <div key={index}>
            //         <hr></hr>
            //         <br></br>
            //         <H3>Name: {node.destinationName}</H3>
            //         <H4>Resource Id: {node.destinationId}</H4>
            //         <H4>At agencyId: {node.atAgency}</H4>
            //         <H4>Created By UserId: {node.createdById}</H4>
            //         <H4>Last Modified: {node.lastModified}</H4>
            //       </div>
            //     ))}{' '}
            //   </div>
            // </div>
            <div>
              <div>
                {/* <H4>list of this destinationresource data </H4>
                <H2>Name: {stateDb?.destinationresource?.destinationName}</H2>
                <H3>Resource Id: {stateDb?.destinationresource?.destinationId}</H3>
                <H3>At agencyId: {stateDb?.destinationresource?.atAgency}</H3>
                <H3>Created By UserId: {stateDb?.destinationresource?.createdById}</H3>
                <H3>Last Modified: {stateDb?.destinationresource?.lastModified}</H3> */}
                {/* <H3>
                  Presentation Placements:{' '}
                  {stateDb?.destinationresource?.signedUrls?.map((node, index) => {
                    <div>{node[index]}</div>;
                  })}
                </H3>
                <H3>Expery at: {stateDb?.destinationresource}</H3>
                 <H3>
                  agencyBucket urls:{' '}
                  {stateDb?.destinationresource?.agencyBucketUrls?.map((node, index) => {
                    <div>{node[index]}</div>;
                  })}
                </H3> */}
              </div>{" "}
            </div>
          )}
          {placeholderData && (
            <Pre>
              <Code>{JSON.stringify(placeholderData, null, 2)}</Code>
            </Pre>
          )}
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </div>
        <style jsx>{`
          .sub_container {
            width: 1300px;
            margin: 0px calc((100% - 1300px) / 2) 0px auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .flex_containers {
            width: 400px;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  loadS3Object_,
};

const mapStateToProps = (state: {
  s3: { placeholderS3Object: any };
  appstate: any;
}) => {
  return {
    imageS3File: state.s3.placeholderS3Object,
    state: state,
    appstate: state.appstate,
  };
};

Destination.propTypes = {
  //https://www.npmjs.com/package/prop-types
};

export default withReduxSaga(
  connect(mapStateToProps, mapDispatchToProps)(withApollo(Destination))
);
