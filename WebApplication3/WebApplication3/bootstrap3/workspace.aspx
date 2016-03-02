<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://safec2zaspwfe1:22000/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsafec2zaspwfe1%3A22000%2F%5Fcatalogs%2Fmasterpage%2Fbootstrap3%2Fworkspace%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
            
            
            
            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
            <div class="row">
                <div class="col-sm-12">
                    <!-- First Row -->
                    <div class="row">
                        <div class="col-sm-12">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow1" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Second Row -->
                    <div class="row">
                        <!-- Four Content Areas-->
                        <div class="col-sm-3 col-xs-6">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow2Column1" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                        <div class="col-sm-3 col-xs-6">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow2Column2" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                        <div class="col-sm-3 col-xs-6">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow2Column3" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                        <div class="col-sm-3 col-xs-6">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow2Column4" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                        <!-- End Thumbnails -->
                    </div>
                    <!-- Third Row -->
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="panel radius">
                                <div class="row">
                                    <div class="col-sm-6">
                                        
                                        
                                        <div>
                                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow3Column1Sub1" FrameType="None" Orientation="Vertical">
                                                <ZoneTemplate>
                                                    
                                                </ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                        
                                    </div>
                                    <div class="col-sm-6">
                                        
                                        
                                        <div>
                                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow3Column1Sub2" FrameType="None" Orientation="Vertical">
                                                <ZoneTemplate>
                                                    
                                                </ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            
                            
                            <div>
                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="bootstrapRow3Column2" FrameType="None" Orientation="Vertical">
                                    <ZoneTemplate>
                                        
                                    </ZoneTemplate>
                                </WebPartPages:WebPartZone>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </asp:Content>